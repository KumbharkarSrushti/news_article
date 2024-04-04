"use client"
import { useState } from "react";
import Header from "./header.js";
import Search from "./search.js";
import Grid from "./grid.js";
import Footer from "./footer.js";
import initial_articles from "./data.js";

class Article {
  constructor(urlToImage, title, description, url) {
    this.urlToImage = urlToImage;  
    this.title = title;
    this.description = description;
    this.url = url;
  }
};

const Home =()=>{
  const [articles, setArticles] = useState(initial_articles);

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
  };

  return (
    <>
      <Header />
      <Search onSearch={onSearch} />
      <Grid articles={articles} />
      <Footer />
    </>
  );
};
export default Home;