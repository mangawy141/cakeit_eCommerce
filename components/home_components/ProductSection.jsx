import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "../Loader";

export default function ProductSection({ products, showHeader }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setIsLoading(false);
    }
  }, [products]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="product-section  mb-150">
      <div className="container">
        {showHeader && (
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Our</span> Products
                </h3>
                <p>
                  Discover the exquisite flavors of our handcrafted products,
                  made with the finest ingredients to delight your senses. Each
                  item in our collection is designed to bring joy and
                  satisfaction, whether you’re celebrating a special occasion or
                  treating yourself to something delicious. Join us on a
                  culinary journey that promises to elevate your taste
                  experience!
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {products.map((product) => (
            <Product productData={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
