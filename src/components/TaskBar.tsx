import React, {useState } from "react";
import "./taskBar.css";
import { icons } from "../icons/icons";
import WindowsSearch from "./windowsSearch";

import { Link} from "react-router-dom";
import Youtube from "./yt";


const TaskBar: React.FC = () => {
  //hidden components
  const [showWindowSearch, setShowWindowSearch] = useState(false);
  const [chevronUpActive, setChevronUpActive] = useState(false);
  const [connectivitySection, setShowConnectivitySection] = useState(false);
  const [youtubeSection, setShowYoutubeSection] = useState(false);
  const [backgroundAppsArr, setBackgroundAppsArr] = useState<Array<string>>([]);

  const handleTaskbarIconClick = (iconToAdd: string) => {
    console.log(iconToAdd);
    backgroundAppsArr?.forEach((val) => {
      val.includes(iconToAdd);
    });
    backgroundAppsArr.push(iconToAdd);
    setBackgroundAppsArr(backgroundAppsArr)
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
        <Link to={"/youtube"}  children={<Youtube isVisible={true}/>}/>
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
