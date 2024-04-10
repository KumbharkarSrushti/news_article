"use client"
import { useState , useEffect } from "react";
import Header from "./header.js";
import Search from "./search.js";
import Grid from "./grid.js";
import Footer from "./footer.js";
import TopHeadlines from "./data.js";


class Article {
  constructor(urlToImage, title, description, url) {
    this.urlToImage = urlToImage;  
    this.title = title;
    this.description = description;
    this.url = url;
  }
};

const Home =()=>{
  const [articles, setArticles] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  
  
  const onSearch = (search_articles) => {
    const new_articles = [];
    let count = 0;
    search_articles.forEach((search_article) => {
      if (count < 9) {
        let new_article = new Article(search_article.urlToImage, search_article.title, search_article.description, search_article.url)
        new_articles.push(new_article);
        count++;
      }
    });
    setArticles(new_articles);
    setShowSearchResults(true);
  };

  let content;
  if (showSearchResults) {
    content = <Grid articles={articles} />;
  } else {
    content = <TopHeadlines />;
  }


  return (
    <>
      <Header />
      <Search onSearch={onSearch} />
      {content}
      <Footer />
    </>
  );
};
export default Home;