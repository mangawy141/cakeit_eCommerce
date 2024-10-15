import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="hero-area hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-2 text-center">
            <div className="hero-text">
              <div className="hero-text-tablecell">
                <p className="subtitle">
                  Sweet & Tasty Cakes In
                  <span className="kuwait-gradient">Kuwait</span>
                </p>
                <h1>Delicious Fresh Ingredients</h1>
                <div className="hero-btns">
                  <Link href="/shop">
                    <a className="boxed-btn">Cake Collection</a>
                  </Link>
                  <Link href="/contact">
                    <a className="bordered-btn"> Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
