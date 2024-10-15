import React, { useState, useEffect } from "react";
import { ProductSection } from "../components/home_components";
import { client } from "../lib/client";

export default function Shop({ products }) {
  const filters = products.map((e) => e.name);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(products);

  // Update filteredItems whenever selectedFilters change
  useEffect(() => {
    if (selectedFilters.length > 0) {
      setFilteredItems(
        products.filter((product) => selectedFilters.includes(product.name))
      );
    } else {
      setFilteredItems(products);
    }
  }, [selectedFilters, products]);

  function handleFilter(filter) {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters((prev) => prev.filter((item) => item !== filter));
    }
  }

  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section mt-150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li
                    className={`${selectedFilters.length < 1 && "active"} `}
                    onClick={() => setSelectedFilters([])}
                  >
                    All
                  </li>
                  {filters.map((e) => (
                    <li
                      onClick={() => handleFilter(e)}
                      className={`${selectedFilters.includes(e) && "active"} `}
                      key={e}
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductSection products={filteredItems} showHeader={false} />
    </>
  );
}

export const getStaticProps = async () => {
  const productsQuery = `*[_type == "product"]`;

  const products = await client.fetch(productsQuery);

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
  };
};
