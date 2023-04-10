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
      <h1>Welcome to<br/>Steam Up!</h1>
    </PageContainer>
  );
}

export default Home