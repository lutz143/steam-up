import PageContainer from "../containers/PageContainer";
import { useQuery, useMutation } from "@apollo/client";
import classes from "./Home.module.css";
import { QUERY_ME } from "../utils/queries";
import { QUERY_GAME } from "../utils/queries";
import React, { useState, useEffect } from 'react';


function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=570&count=3&maxlength=300&format=json');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   }
  //   fetchData();
  // }, []);


  const { loading, error, data } = useQuery(QUERY_GAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <PageContainer>
      <h1>Welcome to Steam Up!</h1>
      <h2>Check out what's popular today!</h2>
      <section className={classes.gridContainer}>
        {data.search.map((game, index) => 
          <div className={classes.gridCard}>
            <img src={game.image} alt={game.description}></img>
            <p>{game.title}</p>
          </div>)}
      </section>
    </PageContainer>
  );
}

export default Home