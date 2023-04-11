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
        <div className={classes.gridCard}>1</div>
        <div className={classes.gridCard}>2</div>
        <div className={classes.gridCard}>3</div>
        <div className={classes.gridCard}>4</div>
        <div className={classes.gridCard}>5</div>
        <div className={classes.gridCard}>6</div>
        <div className={classes.gridCard}>7</div>
        <div className={classes.gridCard}>8</div>
        <div className={classes.gridCard}>9</div>
        <div className={classes.gridCard}>10</div>
      </section>
    </PageContainer>
  );
}

export default Home