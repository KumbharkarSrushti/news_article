"use client"
import React, { useState, useEffect } from 'react';
import Search from "./search.js";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-02-08&to=2024-02-08&sortBy=popularity&apiKey=4ec780570c234ab1a4bf02f7fec5516a');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);


  const sliceData=news.slice(4,13)
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex box1">
          <h2>NewsAPI</h2>
          <div class="test rounded-circle"></div>
          <h2>Org</h2>
        </div>
        <div className="box2">
          <Search />
        </div>
      </div>
      <div className='container'>
        <div class="row">
          <div class="col">
            <div class="newrow">
              <p>TOP NEWS FROM INDIA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {sliceData.map((article, index) => (
            <div key={index} className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={article?.urlToImage} alt="news" />
              <h1 className="title">{article?.title}</h1>
              <p>{article?.description}</p>
              <a href={article?.url}>
                <p>Read full article</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;




























































// const NewsList=()=>{
//   const [news,setNews]= useState([
//     {
//       id: 1,
//       img: "/cricket.png",
//       title: "Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss",
//       news:
//         "The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....",
//         arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//       },
//       {
//         id: 2,
//         img: "/cricket.png",
//         title: "Chandrayaan-3 : India's Imperatives for Space Leadership",
//         news:
//           "Chandrayaan-3's exploration of the lunar south pole signifies a new era in India's space endeavors.This achievement resents an opportunity ...",
//           arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//       },
//     {
//       id: 3,
//       img: "/cricket.png",
//       title: "UN DESA Policy Brief No. 153: India overtakes China as the world’s most populous country",
//       news:
//         "In April 2023, India's population is expected to reach 1,425,775,850 people, matching and then surpassing the population of mainland China ( ...",
//         arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",

//     },
//     {
//       id: 4,
//       img: "/cricket.png",
//       title: "Teetotaller-Turned-Liquor Baron Lalit Khaitan Is India’s Newest Billionaire",
//       news:
//         "The 80-year-old liquor magnate is chairman of the $380 million (revenue) Delhi-based Radico Khaitan, best known for such beverages as 8 PM ...",
//         arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//       },
//     {
//       id: 5,
//       img: "/cricket.png",
//       title: "Google Year in Search 2023: Who were the most searched people in India",
//       news:
//         "As the year 2023 comes to a close, Google has once again revealed the most searched personalities in India. From Bollywood stars to cricket......",
//         arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//       },
//     {
//       id: 6,
//       img: "/cricket.png",
//       title: "Top 10 Most Searched Recipes in India in 2023",
//       news:
//         "Mango pickle was the most searched recipe in India in 2023. The traditional Indian condiment, made with raw, unripe green mangoes, spices...",
//       arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",

//       },
//     {
//       id: 7,
//       img: "/cricket.png",
//       title: "When will the violence in Manipur end?",
//       news:
//         "Peace will not come without acknowledging state complicity and making reparations, all while ensuring safety for the Zo community.",
//       arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//     },
//     {
//       id: 8,
//       img: "/cricket.png",
//       title: "Uttarakhand tunnel collapse: Rescuers free 41 trapped workers",
//       news:
//       "The workers were stuck for two weeks after a part of a tunnel they were working in collapsed.",
//       arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//     },
//     {
//       id: 9,
//       img: "/cricket.png",
//       title: "Odisha train accident: Fifty bodies unclaimed weeks after India crash",
//       news:
//       "More than 50 bodies remain unclaimed a month after a deadly train crash killed at least 293 people in India. The accident took place on 2 ...",
//       arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//     },
//   ]);

//     return(
//     <>
//   <div className="flex-container">
//     <div className="box1"></div>
//     <div className="d-flex justify-content-center box2">
//       <img src="Frame 7.png" alt="logo" style={{ width: '563px', height: '118px' }}></img>
//     </div>
//     <div className="box3"> 
//       <Search/>
//     </div>
//   </div>
//   <div className='newrow'>
//     <p>TOP NEWS FROM INDIA</p>
//   </div>
//   <div className="container">
//         <div className="row">
//           {news.map(article => (
//             <div key={article.id} className="col-12 col-lg-4 box">
//               <img src={article.img} alt="png" />
//               <h1>{article.title}</h1>
//               <p>{article.news}</p>
//               <a href={article.arti}>
//                 <p>Read full article</p>
//               </a>
//             </div>
//           ))}
//         </div>
//   </div>
// </>


//   )
// }

// export default NewsList;















  // const NewsList=()=>{
//   const articles=[
//     {
//       id: 1,
//       img: "/cricket.png",
//       title: "Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss",
//       news:
//         "The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....",
//         arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//       },
//       {
//         id: 2,
//         img: "/cricket.png",
//         title: "Chandrayaan-3 : India's Imperatives for Space Leadership",
//         news:
//           "Chandrayaan-3's exploration of the lunar south pole signifies a new era in India's space endeavors.This achievement resents an opportunity ...",
//           arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//       },
//     {
//       id: 3,
//       img: "/cricket.png",
//       title: "UN DESA Policy Brief No. 153: India overtakes China as the world’s most populous country",
//       news:
//         "In April 2023, India's population is expected to reach 1,425,775,850 people, matching and then surpassing the population of mainland China ( ...",
//         arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",

//     },
//     {
//       id: 4,
//       img: "/cricket.png",
//       title: "Teetotaller-Turned-Liquor Baron Lalit Khaitan Is India’s Newest Billionaire",
//       news:
//         "The 80-year-old liquor magnate is chairman of the $380 million (revenue) Delhi-based Radico Khaitan, best known for such beverages as 8 PM ...",
//         arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//       },
//     {
//       id: 5,
//       img: "/cricket.png",
//       title: "Google Year in Search 2023: Who were the most searched people in India",
//       news:
//         "As the year 2023 comes to a close, Google has once again revealed the most searched personalities in India. From Bollywood stars to cricket......",
//         arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//       },
//     {
//       id: 6,
//       img: "/cricket.png",
//       title: "Top 10 Most Searched Recipes in India in 2023",
//       news:
//         "Mango pickle was the most searched recipe in India in 2023. The traditional Indian condiment, made with raw, unripe green mangoes, spices...",
//       arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",

//       },
//     {
//       id: 7,
//       img: "/cricket.png",
//       title: "When will the violence in Manipur end?",
//       news:
//         "Peace will not come without acknowledging state complicity and making reparations, all while ensuring safety for the Zo community.",
//       arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//     },
//     {
//       id: 8,
//       img: "/cricket.png",
//       title: "Uttarakhand tunnel collapse: Rescuers free 41 trapped workers",
//       news:
//       "The workers were stuck for two weeks after a part of a tunnel they were working in collapsed.",
//       arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//     },
//     {
//       id: 9,
//       img: "/cricket.png",
//       title: "Odisha train accident: Fifty bodies unclaimed weeks after India crash",
//       news:
//       "More than 50 bodies remain unclaimed a month after a deadly train crash killed at least 293 people in India. The accident took place on 2 ...",
//       arti:"https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0",
//     },
//   ];



//   return(
//     <>
//   <div className="flex-container">
//     <div className="box1"></div>
//     <div className="d-flex justify-content-center box2">
//       <img src="Frame 7.png" alt="logo" style={{ width: '563px', height: '118px' }}></img>
//     </div>
//     <div className="box3"> 
//       <Search/>
//     </div>
//   </div>
//   <div className='newrow'>
//     <p>TOP NEWS FROM INDIA</p>
//   </div>
//   <div className="container">
//         <div className="row">
//           {articles.map(article => (
//             <div key={article.id} className="col-12 col-lg-4 box">
//               <img src={article.img} alt="png" />
//               <h1>{article.title}</h1>
//               <p>{article.news}</p>
//               <a href={article.arti}>
//                 <p>Read full article</p>
//               </a>
//             </div>
//           ))}
//         </div>
//   </div>
// </>


//   )
// }
// export default NewsList;















// const Grid = () => {
//   return (
//     <>
//       <div className="flex-container">
//         <div className="box1"></div>
//         <div className="d-flex justify-content-center box2">
//         <img src="/Frame 7.png" alt="logo" style={{ width: '563px', height: '118px' }}></img>
//         </div>
//         <div className="box3"> 
//         <Search/>
//         </div>
//       </div>
//       <div className='newrow'>
//         <p>TOP NEWS FROM INDIA</p>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-lg-4 box">
//             <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//                 <p>Read full article</p>
//               </a>
//             </div>
//           <div className="col-12 col-lg-4 box">
//           <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//               <p>Read full article</p>
//             </a>
//           </div>
//           <div className="col-12 col-lg-4 box">
//           <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//             <p>Read full article</p>
//             </a>
//           </div>
//           <div className="col-12 col-lg-4 box">
//           <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//               <p>Read full article</p>
//             </a>
//           </div>
//           <div className="col-12 col-lg-4 box">
//           <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//               <p>Read full article</p>
//             </a>
//           </div>
//           <div className="col-12 col-lg-4 box">
//           <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//              <p>Read full article</p>
//             </a>
//           </div>
//           <div className="col-12 col-lg-4 box">
//           <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//               <p>Read full article</p>
//             </a>
//           </div>
//           <div className="col-12 col-lg-4 box">
//           <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//               <p>Read full article</p>
//             </a>
//             </div>
//           <div className="col-12 col-lg-4 box">
//           <img src="/cricket.png" alt="png"></img>
//             <h1>Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss</h1>
//             <p>The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....</p>
//             <a href="https://medium.com/@gouravmodi/echoes-of-defeat-a-personal-reflection-on-indias-2023-world-cup-loss-3177e485c1a0">
//               <p>Read full article</p>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Grid;
