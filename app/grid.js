import NewsItem from "./NewsItem.js";
import articles from "./data";

const Grid = () => {
  return (
    <div className="container">
      <h1 className="top_news">TOP NEWS FROM INDIA</h1>
        <div className="row justify-content-center">
            <NewsItem articles={articles[0]} />
            <NewsItem articles={articles[1]} />
            <NewsItem articles={articles[2]} />
        </div>
        <div className="row justify-content-center">
            <NewsItem articles={articles[3]} />
            <NewsItem articles={articles[4]} />
            <NewsItem articles={articles[5]} />
        </div>
        <div className="row justify-content-center">
            <NewsItem articles={articles[6]} />
            <NewsItem articles={articles[7]} />
            <NewsItem articles={articles[8]} />
      </div>
    </div>
  );
}

export default Grid;
