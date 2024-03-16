import React, { useEffect, useState } from "react";
import "./yt.css";
import { icons } from "../icons/icons";

interface YoutubeProps {
  isVisible: boolean;
}

const Youtube: React.FC<YoutubeProps> = ({ isVisible }) => {
  const [ytHeight, setYtHeight] = useState(90);
  const [ytVisibility, setYtVisibility] = useState(false);
  const [darkModeActiveState, setDarkModeActiveState] = useState(false);
  const [darkBg, setDarkBg] = useState("#131d2e");

  useEffect(() => {
    if (darkModeActiveState === true) {
      setDarkBg("#131d2e");
    }
  }, [darkModeActiveState, setDarkBg]);

  const sidePanelItems = [icons.home, icons.shorts, icons.subscriptions];
  const sidePanelYouItems = [
    icons.yourChannel,
    icons.yourHistory,
    icons.yourVideos,
    icons.yourHistory,
    icons.yourLikes,
  ];

  const suggestionItems = [
    "All",
    "Boxing",
    "Gaming",
    "Music",
    "Mixes",
    "Programming",
    "Manga",
    "Freestyle Rap",
    "Stoicism",
    "Podcasts",
    "Stock Market",
    "Comedy",
    "Afro Beats",
    "Recent",
    "Watched",
    "New to you"
  ]
  return (
    <>
      {isVisible && (
        <div
          className="youtube-container"
          style={{ height: `${ytHeight}` + "vh", background: `#${darkBg}` }}
        >
          <div className="ytHeader">
            <div className="logoSection">
              <span>
                {" "}
                <img src={icons.menu} alt="yt" />
              </span>
              <span>
                <img src={icons.youtube} alt="yt" /> YouTube
              </span>
            </div>
            <label htmlFor="#" className="searchSection">
              <input type="text" placeholder="Search" />
              <span className="ytVoiceRecognition">
                <img src={icons.ytMic} alt="ytMic" />
              </span>
            </label>
            <div className="minimizeSection">
              <img
                onClick={() => setDarkModeActiveState(!darkModeActiveState)}
                src={
                  darkModeActiveState === false
                    ? icons.toggleDark
                    : icons.toggleLight
                }
                alt=""
              />
            </div>
          </div>

          <main>
            <div className="sidePanel">
              <ul>
                {sidePanelItems?.map((vals, ind) => {
                  return (
                    <li key={ind}>
                      <img src={vals} alt="" />
                      <p>
                        {ind == 0
                          ? "Home"
                          : ind == 1
                          ? "Shorts"
                          : ind == 2
                          ? "Subscriptions"
                          : " "}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {sidePanelYouItems?.map((vals, ind) => {
                  return (
                    <li key={ind}>
                      <img src={vals} alt="" />
                      <p>
                        {ind == 0
                          ? "Your Channel"
                          : ind == 1
                          ? "History"
                          : ind == 2
                          ? "Your Videos"
                          : ind === 3 ? "Watch Later" : ind == 4 ? "Like Videos" : " "}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mainContent">
           
                <ul>
                  {
                    suggestionItems?.map((vals,index)=>{
                      return(
                        <li key={index}>
                          {
                            vals
                          }
                        </li>
                      )
                    })
                  }
                </ul>
       
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Youtube;
