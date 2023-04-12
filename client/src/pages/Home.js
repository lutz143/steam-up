import PageContainer from "../containers/PageContainer";
import classes from "./Home.module.css";

import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=570&count=3&maxlength=300&format=json');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <PageContainer>
      <h1>Welcome to Steam Up!</h1>
      <h2>Check out what's popular today!</h2>
      <section className={classes.gridContainer}>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
        <div className={classes.gridCard}>
          <img src='https://via.placeholder.com/280x360?text=Placeholder+Cover+Art' alt='Placeholder'></img>
          <p>Game Title</p>
        </div>
      </section>
    </PageContainer>
  );
}

export default Home