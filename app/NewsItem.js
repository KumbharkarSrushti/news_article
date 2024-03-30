const NewsItem = ({ article }) => {
  return(
    <div className="col-12 col-lg-4 box">
      <img className="IMGNEWS" src={article.urlToImage} alt="png" />
      <h2 className="head">{article.title}</h2>
      <p className="para">{article.description}</p>
      <a className="read_article" href={article.url}>Read full article</a>
      <span><img className="arrow" src="/--_.png" alt="arrow"/></span>
    </div>
  )
}
export default NewsItem;