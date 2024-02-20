import React from 'react';
import Search from "./search.js"

function Header() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className='text-center header'>
          <span>NewsAPI</span>
          <img src="/Ellipse 1.png" alt="Image 1" className="img-fluid mb-4" />
          <span>Org</span>
        </div>
      </div>  
      <div className="row justify-content-center">
          <div className='text-center search_box'>
            <Search/>
          </div>
      </div>
    </div>
  );
}

export default Header;