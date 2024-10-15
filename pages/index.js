import React from "react";
import { client } from "../lib/client.js";
import {
  Hero,
  FeaturesList,
  ProductSection,
  Cart_Banner,
} from "../components/home_components/";
import useLoading from "../hooks/useLoading.jsx";

const Home = ({ products, bannerData, on_saleData }) => {
  const [isLoading, LoaderComponent] = useLoading([products, on_saleData]);

  if (isLoading) {
    return LoaderComponent;
  }

  return (
    <>
      <Hero />
      <FeaturesList />
      <ProductSection products={products.length ? products : []} />
      <Cart_Banner on_sale={on_saleData.length ? on_saleData : []} />
    </>
  );
};
export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const bannerQuery = '*[_type == "banner"]';
  const on_saleQuery = `*[_type == "on_sale"]{
    discount,
    custom_message,
    sale_end_date,
    banner_image,
    product->{
      name,
      image,
      slug,
      price
    }
  }`;

  const [products, bannerData, on_saleData] = await Promise.all([
    client.fetch(productQuery),
    client.fetch(bannerQuery),
    client.fetch(on_saleQuery),
  ]);

  return {
    props: {
      products,
      bannerData,
      on_saleData,
    },
  };
};

export default Home;
