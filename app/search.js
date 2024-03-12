"use client"
import React, { useEffect } from 'react';

const Search = () => {
  useEffect(() => {
    const fetchData = () => {
      fetch("https://newsapi.org/v2/everything?q=apple&from=2024-02-08&to=2024-02-08&sortBy=popularity&apiKey=4ec780570c234ab1a4bf02f7fec5516a")
        .then(response => response.json())
        .then(data => console.log(data.articles))
    };

    fetchData();
  }, []);
  return (
    <>
      <input type="search" class="searchbar" placeholder="Search" aria-label="Search" />
      <button type="button">GO</button>
    </>
  );
}

export default Search;