// import React, { useState, useEffect } from 'react';
// import Grid from './grid.js'; 

// const TopHeadlines = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchTopHeadlines = () => {
//       fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ec780570c234ab1a4bf02f7fec5516a`)
//         .then(response => response.json())
//         .then((data) => { 
//           const articlesData = [];
//           data.articles.forEach(article => {
//             articlesData.push({
//               title: article.title,
//               description: article.description,
//               url: article.url,
//               urlToImage: article.urlToImage
//             });
//           });
//           setArticles(articlesData);
//         })
//     };
//     fetchTopHeadlines();
//   }, []);

//   return (
//     <div>
//       <Grid articles={articles} /> 
//     </div>
//   );
// };

// export default TopHeadlines;
