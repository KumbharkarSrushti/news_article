const Grid = () => {
  const articles=[
    {
      title: "Echoes of Defeat: A Personal Reflection on India’s 2023 World Cup Loss",
      img: "/cricket.png",
      description:
        "The first one read, “India's loss in the 2023 World Cup final has echoes of West Indies' defeat in the 1983 World Cup final.” The parallels are .....",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
      },
    {
      title: "Chandrayaan-3 : India's Imperatives for Space Leadership",
      img: "/cricket.png",
      description:
        "Chandrayaan-3's exploration of the lunar south pole signifies a new era in India's space endeavors.This achievement presents an opportunity ...",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
    },
    {
      title: "UN DESA Policy Brief No. 153: India overtakes China as the world’s most populous country",
      img: "/cricket.png",
      description:
        "In April 2023, India's population is expected to reach 1,425,775,850 people, matching and then surpassing the population of mainland China ( ...",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
    },
    {
      title: "Teetotaller-Turned-Liquor Baron Lalit Khaitan Is India’s Newest Billionaire",
      img: "/cricket.png",
      description:
        "The 80-year-old liquor magnate is chairman of the $380 million (revenue) Delhi-based Radico Khaitan, best known for such beverages as 8 PM ...",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
    },
    {
      title: "Google Year in Search 2023: Who were the most searched people in India",
      img: "/cricket.png",
      description:
        "As the year 2023 comes to a close, Google has once again revealed the most searched personalities in India. From Bollywood stars to cricket......",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
    },
    {
      title: "Top 10 Most Searched Recipes in India in 2023",
      img: "/cricket.png",
      description:
        "Mango pickle was the most searched recipe in India in 2023. The traditional Indian condiment, made with raw, unripe green mangoes, spices...",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
    },
    {
      title: "When will the violence in Manipur end?",
      img: "/cricket.png",
      description:
        "Peace will not come without acknowledging state complicity and making reparations, all while ensuring safety for the Zo community.",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
    },
    {
      title: "Uttarakhand tunnel collapse: Rescuers free 41 trapped workers",
      img: "/cricket.png",
      description:
        "The workers were stuck for two weeks after a part of a tunnel they were working in collapsed.",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
    },
    {
      title: "Odisha train accident: Fifty bodies unclaimed weeks after India crash",
      img: "/cricket.png",
      description:
        "More than 50 bodies remain unclaimed a month after a deadly train crash killed at least 293 people in India. The accident took place on 2 ...",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_0bbcc33a-85f3-490b-9f19-c77f31e60581",
    },
  ];
  
  return (
    <>
      <div className="container">
        <h1 className="top_news">TOP NEWS FROM INDIA</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[0].img} alt="png"></img>
              <h1>{articles[0].title}</h1>
              <p>{articles[0].description}</p>
              <a href={articles[0].url}>
                <p>Read full article</p>
              </a>
            </div>
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[1].img} alt="png"></img>
              <h1>{articles[1].title}</h1>
              <p>{articles[1].description}</p>
              <a href={articles[1].url}>
                <p>Read full article</p>
              </a>
          </div>
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[2].img} alt="png"></img>
              <h1>{articles[2].title}</h1>
              <p>{articles[2].description}</p>
              <a href={articles[2].url}>
                <p>Read full article</p>
              </a>
          </div>
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[3].img} alt="png"></img>
              <h1>{articles[3].title}</h1>
              <p>{articles[3].description}</p>
              <a href={articles[3].url}>
                <p>Read full article</p>
              </a>
          </div>
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[4].img} alt="png"></img>
              <h1>{articles[4].title}</h1>
              <p>{articles[4].description}</p>
              <a href={articles[4].url}>
                <p>Read full article</p>
              </a>
          </div>
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[5].img} alt="png"></img>
              <h1>{articles[5].title}</h1>
              <p>{articles[5].description}</p>
              <a href={articles[5].url}>
                <p>Read full article</p>
              </a>
          </div>
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[6].img} alt="png"></img>
              <h1>{articles[6].title}</h1>
              <p>{articles[6].description}</p>
              <a href={articles[6].url}>
                <p>Read full article</p>
              </a>
          </div>
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[7].img} alt="png"></img>
              <h1>{articles[7].title}</h1>
              <p>{articles[7].description}</p>
              <a href={articles[7].url}>
                <p>Read full article</p>
              </a>
            </div>
          <div className="col-12 col-lg-4 box">
              <img className="IMGNEWS" src={articles[8].img} alt="png"></img>
              <h1>{articles[8].title}</h1>
              <p>{articles[8].description}</p>
              <a href={articles[8].url}>
                <p>Read full article</p>
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;