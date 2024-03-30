"use client"
import { useState } from "react";
import Header from "./header.js";
import Search from "./search.js";
import Grid from "./grid.js";
import Footer from "./footer.js";
import news_articles from "./data.js"

const Home =()=>{
  const [searchArticles, setSearchArticles] = useState(news_articles);

  const onSearch = (searchArticles) => {
    setSearchArticles(searchArticles);
  };
  
  const slicedArticles = searchArticles.slice(0, 9);


  return(
      <>
        <Header/>
        <Search onSearch={onSearch}/>
        <Grid articles={slicedArticles}/>
        <Footer/>
      </>
  )
};

export default Home;