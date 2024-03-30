import NewsItem from "./NewsItem.js";
// import articles from "./data";

const Grid = ({articles}) => {
  return (
    <div className="container">
      <h1 className="top_news">TOP NEWS FROM INDIA</h1>
      <div className="row justify-content-center">
          <NewsItem article={articles[0]} />
          <NewsItem article={articles[1]} />
          <NewsItem article={articles[2]} />
      </div>
      <div className="row justify-content-center">
          <NewsItem article={articles[3]} />
          <NewsItem article={articles[4]} />
          <NewsItem article={articles[5]} />
      </div>
      <div className="row justify-content-center">
          <NewsItem article={articles[6]} />
          <NewsItem article={articles[7]} />
          <NewsItem article={articles[8]} />
      </div>
    </div>
  );
}

export default Grid;