import React, { useState, useEffect } from "react";
import SearchArea from "./SearchArea.jsx";
import MobileMenu from "./MobileMenu.jsx";
import Link from "next/link.js";
import { useStateContext } from "../../context/StateContext.jsx";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart.jsx";

export default function Header() {
  const [showSearchArea, setShowSearchArea] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  function handleSearchArea() {
    setShowSearchArea((prev) => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setShowMobileMenu(true);
      } else {
        setShowMobileMenu(false);
      }
    };
    handleResize(); // Run once on mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <header className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              {/* <!-- logo --> */}
              <div className="site-logo">
                <Link href="/">
                  <img
                    src="/assets/img/logo.png"
                    alt="site logo"
                    title="cake.it_KW"
                  />
                </Link>
              </div>
              {/* <!-- logo --> */}

              {/* <!-- menu start --> */}
              <nav className="main-menu">
                <ul>
                  <li className="current-list-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li>
                    <div className="header-icons">
                      {/* <a className="shopping-cart" href="cart.html">
                        <i className="fas fa-shopping-cart"></i>
                      </a> */}
                      <button
                        type="button"
                        className="cart-icon"
                        onClick={() => setShowCart(true)}
                      >
                        <AiOutlineShopping />
                        <span className="cart-item-qty">{totalQuantities}</span>
                      </button>
                      <a className="mobile-hide search-bar-icon" href="#search">
                        <span onClick={handleSearchArea}>
                          <i className="fas fa-search"></i>
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <a
                className="mobile-show search-bar-icon"
                href="#search"
                onClick={handleSearchArea}
              >
                <i className="fas fa-search"></i>
              </a>
              {/* <!-- menu end --> */}
              {showMobileMenu && <MobileMenu />}
            </div>
          </div>
        </div>
      </div>
      {showCart && <Cart />}
      {showSearchArea && <SearchArea setShowSearchArea={setShowSearchArea} />}
    </header>
  );
}
