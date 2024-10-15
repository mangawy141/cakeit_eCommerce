import React from "react";

export default function SearchArea({ setShowSearchArea }) {
  function handleClose() {
    setShowSearchArea(false);
  }

  return (
    <div className="search-area search-active">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className="close-btn" onClick={handleClose}>
              <i className="fas fa-window-close"></i>
            </span>
            <div className="search-bar">
              <div className="search-bar-tablecell">
                <h3>Search For:</h3>
                <input type="text" placeholder="Keywords" />
                <button type="submit">
                  Search <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
