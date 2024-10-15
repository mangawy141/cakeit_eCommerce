import React from "react";
import Link from "next/link";
export default function about() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>We Sell Delicious Cakes</p>
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="featured-text">
                <h2 className="pb-3">
                  Why <span className="orange-text">Cake.It</span>
                </h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-shipping-fast"></i>
                      </div>
                      <div className="content">
                        <h3>Home Delivery</h3>
                        <p>
                          sit voluptatem accusantium dolore mque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-money-bill-alt"></i>
                      </div>
                      <div className="content">
                        <h3>Best Price</h3>
                        <p>
                          sit voluptatem accusantium dolore mque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-briefcase"></i>
                      </div>
                      <div className="content">
                        <h3>Custom Box</h3>
                        <p>
                          sit voluptatem accusantium dolore mque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-sync-alt"></i>
                      </div>
                      <div className="content">
                        <h3>Quick Refund</h3>
                        <p>
                          sit voluptatem accusantium dolore mque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="shop-banner">
        <div className="container">
          <h3>
            December sale is on! <br /> with big{" "}
            <span className="orange-text">Discount...</span>
          </h3>
          <div className="sale-percent">
            <span>
              Sale! <br /> Upto
            </span>
            50% <span>off</span>
          </div>
          <Link href="/shop" passHref>
            <a className="cart-btn btn-lg">Shop Now</a>
          </Link>
        </div>
      </section>
    </>
  );
}
