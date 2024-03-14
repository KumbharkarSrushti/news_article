const NewsItem = ({ articles }) => {
  return(
    <div className="col-12 col-lg-4 box">
      <img className="IMGNEWS" src={articles.img} alt="png" />
      <h2 className="head">{articles.title}</h2>
      <p className="para">{articles.description}</p>
      <a className="read_article" href={articles.url}>Read full article</a>
      <span><img className="arrow" src={articles.Image} alt="arrow"/></span>
    </div>
  )
}
export default NewsItem;







