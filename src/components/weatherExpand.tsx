import { useCallback, useEffect, useState } from "react";
import { icons, images } from "../icons/icons";
import { newsFeed } from "../interfaces/newsFeedInterface";
import NewsFeed from "./newsFeed";

function WeatherExpand() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
  });

  const cities = ["Cape Town", "Durban", "Pretoria"];
  const travelTimes = ["Route Suggestion ", "Travel Summary "];
  const forexData = [
    {
      pair: "J200",
      price: 56.79,
      percentage: 3.6,
      desc: "FTSE/JSE TOP 40 ZAR ",
    },
    {
      pair: "S&P500",
      price: 97.92,
      percentage: 0.06,
      desc: "Standard and Poor's 500 Index is a capitalization-weighted stock market index measuring the performance of 500 large publicly traded companies in the United States.",
    },
    {
      pair: "BTC/USD",
      price: 130.79,
      percentage: 3.6,
      desc: "Bitcoin Shatters $46K to Hit 10% Gain in 4 Days as Traders Ramp Up Long Bets ",
    },
    {
      pair: "NasDaq 100 Index",
      price: 88.59,
      percentage: 0.16,
      desc: "The NASDAQ-100 is an index that is constituted by 100 of the largest companies listed on the NASDAQ stock exchange",
    },
    {
      pair: "DOW 30",
      price: 56.79,
      percentage: 0.13,
      desc: "Dow Jones* often refers to the Dow Jones Industrial Average, which was one of the first stock indices and is one of the most commonly referred to barometers of equity performance in the United States",
    },
    {
      pair: "DAX",
      price: 200.79,
      percentage: 2.36,
      desc: "FTSE/JSE TOP 40 ZAR ",
    },
  ];

  const api_key = "6b968bf3d26641f2b19882337e62654c";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
  const [newsFeed, setNewsFeed] = useState<Array<newsFeed>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetcher = await fetch(url);
        const data = await fetcher.json();
        setNewsFeed(data.articles); // Assuming the response has an 'articles' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const weatherAPI = "ffcad951689e806fe536375d8ab78b41  ";
  const [searchedCity, setSearchedCity] = useState("Cape Town");
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${weatherAPI}`;

  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const fetchDataTwo = async () => {
      try {
        const fetcher = await fetch(weatherUrl);
        const data = await fetcher.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataTwo();
  }, [searchedCity]);

  newsFeed.map((vals) => {
    console.log(vals.imgUrl);
  });

  const replacementAutorNames = [
    "David Goggins",
    "Josh Myers",
    "Kendrick Lamar",
    "Josh Myers",
    "Dumisani Nkosi",
    "Tafazdzwa Blessing",
    "J Cole",
    "Mihlali Solwandle",
  ];

  return (
    <>
      <div className="weatherExpander">
        <section className="topSection">
          <span id="weatherExpanderDate">{formattedDate}</span>
          <ul>
            <li>Good Morning</li>
            <li id="weatherSpacer"></li>
            <li>
              <img src={icons.refresh} alt="icon" />
            </li>
            <li>
              <img src={icons.expander} alt="icon" />
            </li>
            <li>
              <img src={icons.user} alt="icon" />
            </li>
            <li>
              <img src={icons.settings} alt="icon" />
            </li>
          </ul>
        </section>
        <main className="weatherExpanderMain">
          <div className="left">
            <div
              className="cityWeather"
              style={{
                backgroundImage: `url(${images.cpt})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="top">
                <select
                  name="#"
                  id="cities"
                  onChange={(e) => {
                    setSearchedCity(e.target.value);
                  }}
                >
                  {cities?.map((val, index) => {
                    return (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="middle"></div>
            </div>
            <div className="forexSection">
              <h1 id="headTitle">Market</h1>
              {forexData?.map((v) => {
                return (
                  <div id="marketStatCell">
                    <p>
                      <span>{v.pair}</span>
                      <span id="desc">{v.desc.slice(0,25)}...</span>
                    </p>
                    <p>
                      <img src={v.percentage < 1 ? images.chartRed : images.chartGreen} alt="stockUp" />
                    </p>
                    <p>
                      <span id="price" style={{
                        color: v.percentage < 1 ? "#fa1414": "#1EE317"
                      }}>{v.price}</span>
                      <span id="percent">{v.percentage}%</span>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="forexSection">
              <div className="top">
                <select name="#" id="times">
                  {travelTimes?.map((val, index) => {
                    return (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="middle"></div>
              <div className="bottom"></div>
            </div>
          </div>
          <div className="right">
            {newsFeed?.map((val, index) => {
              return (
                <div className="article">
                  <div className="img">
                  
                  </div>
                  <div className="info">
                    <span id="title">
                      {/*val.author
                        ? JSON.stringify(val.author)
                            .replace(/"/g, "")
                            .slice(0, 20)
                        : JSON.stringify(val.author).charAt(0) == "B"
                        ? replacementAutorNames[index]
                        : JSON.stringify(val.author)
                            .replace(/"/g, "")
              .slice(0, 20)*/}
                    </span>
                    <span id="desc">{/*val.title*/}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
export default WeatherExpand;
