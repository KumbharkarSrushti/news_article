const initial_articles=[
      {
        id:0,
        title: "Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss",
        urlToImage: "/cricket.png",
        description:
          "The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
      {
        id:1,
        title: "Chandrayaan-3 : India's Imperatives for Space Leadership",
        urlToImage: "/cricket.png",
        description:
          "Chandrayaan-3's exploration of the lunar south pole signifies a new era in India's space endeavors.This achievement presents an opportunity ...",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
      {
        id:2,
        title: "UN DESA Policy Brief No. 153: India overtakes China as the world’s most populous country",
        urlToImage: "/cricket.png",
        description:
          "In April 2023, India's population is expected to reach 1,425,775,850 people, matching and then surpassing the population of mainland China ( ...",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
      {
        id:3,
        title: "Teetotaller-Turned-Liquor Baron Lalit Khaitan Is India’s Newest Billionaire",
        urlToImage: "/cricket.png",
        description:
          "The 80-year-old liquor magnate is chairman of the $380 million (revenue) Delhi-based Radico Khaitan, best known for such beverages as 8 PM ...",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
      {
        id:4,
        title: "Google Year in Search 2023: Who were the most searched people in India",
        urlToImage: "/cricket.png",
        description:
          "As the year 2023 comes to a close, Google has once again revealed the most searched personalities in India. From Bollywood stars to cricket......",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
      {
        id:5,
        title: "Top 10 Most Searched Recipes in India in 2023",
        urlToImage: "/cricket.png",
        description:
          "Mango pickle was the most searched recipe in India in 2023. The traditional Indian condiment, made with raw, unripe green mangoes, spices...",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
      {
        id:6,
        title: "When will the violence in Manipur end?",
        urlToImage: "/cricket.png",
        description:
          "Peace will not come without acknowledging state complicity and making reparations, all while ensuring safety for the Zo community.",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
      {
        id:7,
        title: "Uttarakhand tunnel collapse: Rescuers free 41 trapped workers",
        urlToImage: "/cricket.png",
        description:
          "The workers were stuck for two weeks after a part of a tunnel they were working in collapsed.",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
      {
        id:8,
        title: "Odisha train accident: Fifty bodies unclaimed weeks after India crash",
        urlToImage: "/cricket.png",
        description:
          "More than 50 bodies remain unclaimed a month after a deadly train crash killed at least 293 people in India. The accident took place on 2 ...",
        url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
    ];

export default initial_articles;





// import { useEffect, useState } from "react";

// class Top_Headlines {
//   constructor(urlToImage, title, description, url) {
//     this.urlToImage = urlToImage;  
//     this.title = title;
//     this.description = description;
//     this.url = url;
//   }
// }

// const initial_articles = () => {
//   const [headlines, setHeadlines] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://newsapi.org/v2/top-headlines?country=IN&category=business&apiKey=4ec780570c234ab1a4bf02f7fec5516a");
//       const data = await response.json();
//       const fetchedArticles = [];
//       data.articles.forEach(articleData => {
//         const article = new Top_Headlines(articleData.urlToImage, articleData.title, articleData.description, articleData.url);
//         fetchedArticles.push(article);
//       });
//       setHeadlines(fetchedArticles);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
      
//     </div>
//   );
// };

// export default initial_articles;
