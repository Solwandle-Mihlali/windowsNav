import React, { useEffect, useState } from "react";
import "./taskBar.css";
import { icons } from "../icons/icons";
import WindowsSearch from "./windowsSearch";
import Youtube from "./yt";
import { Configuration } from "../config";

const TaskBar: React.FC = () => {
  const api_key = Configuration.YT_API_KEY;
  //hidden components
  const [showWindowSearch, setShowWindowSearch] = useState(false);
  const [chevronUpActive, setChevronUpActive] = useState(false);
  const [connectivitySection, setShowConnectivitySection] = useState(false);
  const [youtubeSection, setShowYoutubeSection] = useState(false);
  const [backgroundAppsArr, setBackgroundAppsArr] = useState<Array<string>>([]);

  //fetching a storing yt data
  useEffect(() => {
    const fetchYoutubeData = async () => {
        try {
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCZGSIqguQ-g6DNf32zqu9NQ&key=${api_key}`
            );

            if (response.ok) { // Use response.ok for HTTP status check
                const data = await response.json();
                console.log(data); // Access parsed data instead of response.body
            } else {
                console.error("Failed to fetch YouTube data:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching YouTube data:", error);
        }
    };

    fetchYoutubeData();
}, []); // Empty dependency array to run only on mount

  //useEffect to ensure only one div is visible at a time

  {
    /*
     useEffect(() => {
    if (chevronUpActive === true) {
      setShowWindowSearch(false);
      setShowConnectivitySection(false);
    } else {
      setShowWindowSearch(prevShowWindowSearch => prevShowWindowSearch);
      setShowConnectivitySection(prevConnectivitySection => prevConnectivitySection);
    }
  }, [chevronUpActive, showWindowSearch, connectivitySection]);
    */
  }

  const handleTaskbarIconClick = (iconToAdd: string) => {
    console.log(iconToAdd);
    backgroundAppsArr.push(iconToAdd);
  };
  return (
    <>
      {showWindowSearch && <WindowsSearch isVisible={showWindowSearch} />}
      {chevronUpActive && (
        <div className="backgroundApps">
          <ul>
            {backgroundAppsArr?.map((vals, index) => {
              return (
                <li key={index}>
                  <img src={vals} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {connectivitySection && (
        <div className="connectivityContainer">
          <div className="notificationsContainer">
            <p style={{ color: "white", fontSize: "30px" }}></p>
          </div>
          <div className="bluetoothEtc"></div>
        </div>
      )}
      {youtubeSection && (
        <Youtube isVisible={youtubeSection == true ? true : false} />
      )}
      <div className="taskBarHolder">
        <div className="taskBarSections"></div>
        <div className="taskBarSections  taskBarMiddleSection">
          <ul>
            <li>
              {
                <img
                  src={icons.windows}
                  alt=""
                  onClick={() => {
                    setShowWindowSearch(!showWindowSearch);
                  }}
                />
              }
            </li>
            <li>
              <img src={icons.searchIcon} alt="" />
              <input type="text" placeholder="Search"></input>
              <img
                onClick={() => handleTaskbarIconClick(icons.briefCase)}
                src={icons.briefCase}
                alt=""
              />
            </li>
            <li onClick={() => handleTaskbarIconClick(icons.outLookIcon)}>
              <img src={icons.outLookIcon} alt="" />
            </li>
            <li onClick={() => handleTaskbarIconClick(icons.youtube)}>
              {
                <img
                  onClick={() => setShowYoutubeSection(!youtubeSection)}
                  src={icons.youtube}
                  alt=""
                />
              }
            </li>
          </ul>
        </div>
        <div className="taskBarSections taskBarRightSection">
          <ul>
            <li onClick={() => setChevronUpActive(!chevronUpActive)}>
              <img
                src={
                  chevronUpActive == true ? icons.chevronUp : icons.chevronDown
                }
                alt=""
              />
            </li>
            <li>
              ENG <br /> US
            </li>
            <li
              onClick={() => setShowConnectivitySection(!connectivitySection)}
            >
              <img src={icons.wifi} alt="" />
              <img src={icons.speaker} alt="" />
              <img src={icons.battery} alt="" />
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskBar;
