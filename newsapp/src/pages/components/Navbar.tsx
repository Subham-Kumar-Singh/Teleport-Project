// import React  from 'react';
import Sports, { Entertainment, Ministry, Technology, Defence } from "./Items";
import React from "react";

function Navbar(prop: any) {
  return (
    <div>
      <div className="all-navbar">
        <div className="navbar">
          <div className="heading">
            <span className="heading-h1">Newsतक</span>
          </div>
          <div className="search-container">
            <form action="">
              <input
                className="search-container-input"
                type="text"
                placeholder="Search.."
                name="search"
              />
              <button
                type="submit"
                className="search-container-button button-hover"
              >
                <i>Search</i>
              </button>
            </form>
          </div>
        </div>
        <div className="navbar-second">
          <Sports prop={prop.prop} />
          <Entertainment prop={prop.prop}/> 
          <Defence prop={prop.prop}/>
          <Ministry prop={prop.prop}/>
          <Technology prop={prop.prop}/> 
        </div>
      </div>
    </div>
  );
}

// ad07050197494943b1c37676780b2fb9

export default Navbar;
