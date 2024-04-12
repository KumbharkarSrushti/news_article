import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <>
      {article && (
        <div className="col-12 col-lg-4 box">
          <img className="IMGNEWS" src={article.urlToImage || 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'} alt="png"/>
          <h2 className="head">{article.title}</h2>
          <p className="para">{article.description}</p>
          <a className="read_article" href={article.url}>Read full article</a>
          <span><img className="arrow" src="/--_.png" alt="arrow"/></span>
        </div>
      )}
    </>
  );
}

export default NewsItem;
