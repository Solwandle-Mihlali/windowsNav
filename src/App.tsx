import "./App.css";
import { icons, images } from "./icons/icons";
import WeatherExpand from "./components/weatherExpand";
import { useState } from "react";

function App() {
  const [showWeatherExpander, setShowWeatherExpander] = useState(false);
  const [showWindowSearch, setShowWindowSearch] = useState(false);
  const appAndDesc = [
    { Edge: { src: icons.word } },
    { Excel: { src: icons.excel } },
  ];

  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${images.bg2})` }}>
        {showWeatherExpander && <WeatherExpand />}
        <nav>
          <div className="weather">
            <span
              id="weatherIcon"
              onClick={() => {
                setShowWeatherExpander(true);
                setShowWindowSearch(false);
              }}
            >
              <img src={icons.cloudy} alt="weather" />
            </span>
            <span id="weatherDetails">
              <div className="top">18</div>
              <div className="top">Mostly Sunny</div>
            </span>
          </div>
          <div className="spacer"></div>
          <ul className="osIcons">
            <li>
              <img
                onClick={() => {
                  setShowWeatherExpander(false);
                  setShowWindowSearch(true);
                }}
                src={icons.windows}
                alt=""
              />
            </li>
            <li>
              <img
                onClick={() => {
                  setShowWindowSearch(!showWindowSearch);
                }}
                src={icons.briefCase}
                alt=""
              />
            </li>
          </ul>
        </nav>
        {showWindowSearch && (
          <div className="windowSearch">
            <section className="searchAndPinned"></section>
            <section className="apps">
              {appAndDesc?.map((item, index) => {
                // Extract the key and value from the object
                const [appName, { src }] = Object.entries(item)[0];

                return (
                  <div key={index}>
                    <p>App: {appName}</p>
                    <img src={src} alt={`${appName} icon`} />
                  </div>
                );
              })}
            </section>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
