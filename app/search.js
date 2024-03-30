"use client"
import React, {useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    fetch(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=4ec780570c234ab1a4bf02f7fec5516a`)
      .then(response => response.json())
      .then((json) => {
        onSearch(json.articles); 
        console.log(json)
      })
    };


  return (
    <>
    <div className="row justify-content-center">
      <div className='text-center search_box'>
      <input 
        type="search" 
        className="searchbar" 
        placeholder="Search" 
        aria-label="Search" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} 
      />
      
      <button 
        type="button" 
        onClick={handleSearch}>
        GO</button>
        </div>
    </div>
    </>
  );
}

export default Search;