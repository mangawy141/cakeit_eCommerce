import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Sweet And Tasty Cakes</p>
                <h1>404 - Not Found</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="full-height-section error-section">
        <div className="full-height-tablecell">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="error-text">
                  <i className="far fa-sad-cry"></i>
                  <h1>Oops! Not Found.</h1>
                  <p>The page you requested for is not found.</p>
                  <Link href="/" passHref>
                    <a className="boxed-btn">Back to Home</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
