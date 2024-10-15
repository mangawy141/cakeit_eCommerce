import React, { useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { ProductSection } from "../../components/home_components";
import useLoading from "../../hooks/useLoading";
import { useStateContext } from "../../context/StateContext";

export default function ProductDetails({ products, product }) {
  const { qty, incQty, decQty, onAdd } = useStateContext();
  const [index, setIndex] = useState(0);
  const [isLoading, LoaderComponent] = useLoading([
    products || [],
    product || {},
  ]);

  if (isLoading) {
    return LoaderComponent;
  }
  const { image, name, details, price } = product;
  // const AllImages = products.map((e) => e.image[0]);
  const productImage = image ? urlFor(image[index]).url() : "";

  function handleCakeImage(item) {
    console.log(item);
  }
  return (
    <>
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>See more details about</p>
                <h1>{name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Product */}
      <div className="single-product mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="product-detail-image">
                <div className="main-image-container">
                  <img
                    src={productImage}
                    alt={`${name} image`}
                    className="main-image"
                  />
                </div>
                <div className="small-images-container">
                  {image?.map((item, i) => (
                    <img
                      key={item._key}
                      src={urlFor(item).url()}
                      className={
                        i === index
                          ? "small-image selected-image"
                          : "small-image"
                      }
                      alt={`${name} thumbnail ${item.key}`}
                      onMouseEnter={() => setIndex(i)}
                      onClick={(item) => handleCakeImage(item)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-content">
                <h3>{name}</h3>
                <div className="reviews">
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <p>(20)</p>
                </div>
                <p className="single-product-pricing">
                  <span>Per Cake</span> ${price}
                </p>
                <p>{details}</p>
                <div className="single-product-form">
                  <p className="quantity-desc">
                    <span className="minus" onClick={decQty}>
                      <AiOutlineMinus />
                    </span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}>
                      <AiOutlinePlus />
                    </span>
                  </p>
                  <div className="buttons">
                    <button
                      type="button"
                      className="add-to-cart"
                      onClick={() => onAdd(product, qty)}
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button type="button" className="buy-now" onClick="">
                      Buy Now
                    </button>
                  </div>

                  <p>
                    <strong>Categories: </strong> {name}
                  </p>
                </div>
                <h4>Share:</h4>
                <ul className="product-share">
                  <li>
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More Products */}
      <div className="more-products mb-150">
        <div className="container">
          <div className="row">
            <ProductSection products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"]`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{ slug { current } }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
