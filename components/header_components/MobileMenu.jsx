import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const { setShowCart, totalQuantities } = useStateContext();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (index) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <a href="#nav" className="meanmenu-reveal" onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                className="meanmenu-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </a>
          <nav className="mean-nav">
            <ul className={`${menuOpen ? "menu-reveal" : "menu-hidden"}`}>
              <li className="current-list-item">
                <a href="/">Home</a>
                <ul
                  className="sub-menu"
                  style={{ display: subMenuOpen[0] ? "block" : "none" }}
                >
                  <li>
                    <a href="/">Static Home</a>
                  </li>
                  <li>
                    <a href="/index_2">Slider Home</a>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => toggleSubMenu(0)}
                >
                  {subMenuOpen[0] ? "-" : "+"}
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/Shop">Shop</a>
                <ul
                  className="sub-menu"
                  style={{ display: subMenuOpen[2] ? "block" : "none" }}
                >
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                  <li>
                    <a href="/checkout">Check Out</a>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => toggleSubMenu(2)}
                  style={{ fontSize: "18px" }}
                >
                  {subMenuOpen[2] ? "-" : "+"}
                </a>
              </li>
              <li className="mean-last">
                <div className="header-icons">
                  <a className="mobile-hide search-bar-icon" href="/search">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  className="cart-icon"
                  onClick={() => setShowCart(true)}
                >
                  <AiOutlineShopping />
                  <span className="cart-item-qty">{totalQuantities}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
