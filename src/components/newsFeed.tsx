import { useState, useEffect } from "react";
import { newsFeed } from "../interfaces/newsFeedInterface";

const api_key = "6b968bf3d26641f2b19882337e62654c";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
  const [newsFeed, setNewsFeed] = useState<Array<newsFeed>>([]);
 
 interface newsFeedProps  {
    cityName : string
 }

 

  const NewsFeed: React.FC<newsFeedProps> = ({cityName}) =>{
    const api_key = "6b968bf3d26641f2b19882337e62654c";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
  const [newsFeed, setNewsFeed] = useState<Array<newsFeed>>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const fetcher = await fetch(url);
            const data = await fetcher.json();
            setNewsFeed(data.articles); 
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
    return(

      <>
      
      </>
    )

  }
  export default NewsFeed