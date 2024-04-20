import React, { useEffect, useState } from "react";
import "./yt.css";
import { icons, youtubeThumbnails } from "../icons/icons";
import { Configuration } from "../config";


interface YoutubeProps {
  isVisible: boolean;
}

const Youtube: React.FC<YoutubeProps> = ({ isVisible }) => {
  const ytHeight = useState(90);
  const [darkModeActiveState, setDarkModeActiveState] = useState(false);
  const [darkModeClass, setDarkModeClass] = useState("youtube-container")
  const api_key = Configuration.YT_API_KEY;
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    const fetchYoutubeData = async () => {
      try {
        const response = await fetch(
          `GET https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${api_key}`
        );

        if (response.ok) {
          // Use response.ok for HTTP status check
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
  }, []);
  
  //setting dark mode logic 
  useEffect(() => {
     if(darkModeActiveState == true ){
      setDarkModeClass("youtube-container-dark")
     }
     else(setDarkModeClass("youtube-container"))
  }, [darkModeActiveState,setDarkModeClass]);
  

  const sidePanelItems = [icons.home, icons.shorts, icons.subscriptions];
  const sidePanelYouItems = [
    icons.yourChannel,
    icons.yourHistory,
    icons.yourVideos,
    icons.yourHistory,
    icons.yourLikes,
  ];

 
  const dummyThumbNails = [
    {
      img: youtubeThumbnails.thumbThree,
      title: "REACT | A PRACTICAL PROJECT",
      channel: "SemiColon_00",
      views: 944,
      uploaded: "6 hours ago",
    },
    {
      img: youtubeThumbnails.thumbone,
      title: "FREELANCING 101",
      channel: "Free Freelance",
      views: 53,
      uploaded: "3 weeks ago",
    },
    {
      img: youtubeThumbnails.thumbTwo,
      title: "SECRETS TO FRONTEND MASTERY",
      channel: "Secrets Channel",
      views: 5,
      uploaded: " 30 mins ago",
    },
    {
      img: youtubeThumbnails.thumbFour,
      title: "THE AI REVOLUTION",
      channel: "AI Channel",
      views: 5,
      uploaded: "2 years ago",
    },
    {
      img: youtubeThumbnails.thumbFive,
      title: "Blog Boosting",
      channel: "Bloggers Channel",
      views: 65,
      uploaded: "1 year ago",
    },
    {
      img: youtubeThumbnails.thumbSix,
      title: "Corporate tips",
      channel: "Corporate Channel",
      views: 5,
      uploaded: "1 year ago",
    },
    {
      img: youtubeThumbnails.thumbSeven,
      title: "Blog Boosting",
      channel: "Dark Facts Channel",
      views: 53,
      uploaded: "20 mins ago",
    },
    {
      img: youtubeThumbnails.thumbone,
      title: "JavaScript Basics",
      channel: "Coding Academy",
      views: 1200,
      uploaded: "1 day ago",
    },
    {
      img: youtubeThumbnails.thumbTwo,
      title: "Understanding CSS Grid",
      channel: "Web Dev Tutorials",
      views: 530,
      uploaded: "3 days ago",
    },
    {
      img: youtubeThumbnails.thumbThree,
      title: "Introduction to React",
      channel: "React Fan Club",
      views: 940,
      uploaded: "6 hours ago",
    },
    {
      img: youtubeThumbnails.thumbFour,
      title: "Advanced Python Techniques",
      channel: "Python Mastery",
      views: 150,
      uploaded: "2 weeks ago",
    },
    {
      img: youtubeThumbnails.thumbFive,
      title: "Machine Learning Basics",
      channel: "AI Explorer",
      views: 300,
      uploaded: "5 days ago",
    },
    {
      img: youtubeThumbnails.thumbSix,
      title: "SEO Best Practices",
      channel: "Marketing Insights",
      views: 100,
      uploaded: "1 month ago",
    },
    {
      img: youtubeThumbnails.thumbSeven,
      title: "Building RESTful APIs",
      channel: "Backend Builders",
      views: 210,
      uploaded: "2 months ago",
    },
    {
      img: youtubeThumbnails.thumbTwo,
      title: "Vue.js for Beginners",
      channel: "Vue Tutorial Hub",
      views: 850,
      uploaded: "1 day ago",
    },
    {
      img: youtubeThumbnails.thumbFour,
      title: "Docker & Containers 101",
      channel: "DevOps Insights",
      views: 450,
      uploaded: "2 weeks ago",
    },
    {
      img: youtubeThumbnails.thumbSeven,
      title: "CSS Animations Made Easy",
      channel: "CSS Masterclass",
      views: 390,
      uploaded: "1 week ago",
    },
    {
      img: youtubeThumbnails.thumbFive,
      title: "JavaScript Design Patterns",
      channel: "Code Reflections",
      views: 260,
      uploaded: "4 days ago",
    },
    {
      img: youtubeThumbnails.thumbone,
      title: "React State Management",
      channel: "React Coders",
      views: 750,
      uploaded: "3 days ago",
    },
    {
      img: youtubeThumbnails.thumbThree,
      title: "Deep Dive into Node.js",
      channel: "Node World",
      views: 620,
      uploaded: "6 hours ago",
    },
    {
      img: youtubeThumbnails.thumbSix,
      title: "Learning Python in 10 Days",
      channel: "Python Academy",
      views: 330,
      uploaded: "1 month ago",
    },
    {
      img: youtubeThumbnails.thumbone,
      title: "Bootstrap Framework Basics",
      channel: "Frontend Tutorials",
      views: 810,
      uploaded: "2 weeks ago",
    },
    {
      img: youtubeThumbnails.thumbTwo,
      title: "Optimizing React Components",
      channel: "React Enthusiasts",
      views: 670,
      uploaded: "1 week ago",
    },
    {
      img: youtubeThumbnails.thumbSeven,
      title: "Web Development Career Tips",
      channel: "Career in Tech",
      views: 950,
      uploaded: "3 days ago",
    },
  
  ];

  const quickAccess = [
    {
      img : icons.whatsApp
    },
    {
      img : icons.tiktok
    },
    {
      img : icons.excel
    },
    {
      img: icons.word
    }
    
  ]

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
    "New to you",
  ];
  return (
    <>
      {isVisible && (
        <div
          className={`${darkModeClass}`}
          style={{ height: `${ytHeight}` + "vh"}}
        >
          <div className="otherAppQuickAcces">
            
            {
              quickAccess?.map((val,ind)=>{
                return <img key={ind} src={val.img} alt="" />
              })
            }
            
          </div>
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
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="ytVoiceRecognition" >
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
                    <li key={ind} className={""}>
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
                          : ind === 3
                          ? "Watch Later"
                          : ind == 4
                          ? "Like Videos"
                          : " "}
                      </p>
                    </li>
                  );
                })}
                <li>
                  <img src={icons.chevronDown} alt="" />
                  <p>
                    Easy Access
                  </p>
                </li>
              </ul>
             
            </div>
            <div className="mainContent">
              <ul>
                {suggestionItems?.map((vals, index) => {
                  return <li key={index}>{vals}</li>;
                })}
              </ul>
              <div className="youtubeContentSection">
                {dummyThumbNails?.map((val, ind) => {
                  return (
                    <div className="thumbnail" key={ind}>
                      <img src={val.img} alt="thumbNail" />
                      <div className="channelInfo">
                        <span className="imgSection">
                          <img src={val.img}
                           alt="" />
                        </span>
                        <div className="infoSection">
                        <h2 className="title">
                        {
                          val.title
                        }
                       </h2>
                       <h3>
                        {
                          val.channel
                        }
                       </h3>
                      <div className="views">
                        <span>
                          {
                            val.views
                          }
                          {
                            ind == 1 ? "m" : ind == 0 ? " " : "k"
                          }
                          {" "}
                          views
                           <span></span>
                          {
                            val.uploaded
                          }
                        </span>
                      
                      </div>
                        </div>
                      </div>
                       
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Youtube;
