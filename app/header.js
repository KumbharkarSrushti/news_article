import React from 'react';
import  Search from "./search.js"
const Header = () => {
    return (
      <>
        <div class="container-fluid">
          <div class="row box1">
            <h2>NewsAPI</h2>
            <img class='red' src="/Ellipse 1.png"></img>
            <h2>Org</h2>
          </div>
          <Search />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
                <p>TOP NEWS FROM INDIA</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Header;
  