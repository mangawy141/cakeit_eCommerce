import React from "react";
import { urlFor } from "../../lib/client";
import Link from "next/link";

export default function Product({ productData: { image, name, price, slug } }) {
  const defaultImage = "/assets/img/logo.png"; // Ensure this path is correct
  // Generate the image URL or fallback to the default image
  const imageUrl =
    image && image.length > 0 ? urlFor(image[0]).url() : defaultImage;
  return (
    <div className="col-lg-4 col-md-6 text-center">
      <div className="single-product-item fade-in">
        <div className="product-image">
          <Link href={`/single-product/${slug.current}`}>
            <img src={imageUrl} alt={name} title="go-to-single-product" />
          </Link>
        </div>
        <h3>{name}</h3>
        <p className="product-price">
          <span>Per Cake</span> {price}$
        </p>
        <Link href={`/single-product/${slug.current}`} passHref>
          <a className="cart-btn" title="go-to-shop">
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </a>
        </Link>
      </div>
    </div>
  );
}
