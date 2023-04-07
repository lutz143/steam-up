import React, { useState, useEffect } from "react";
import PageContainer from "../containers/PageContainer";
import classes from "./Game.module.css";
import SteamAPI from "steam-webapi";

function Game() {
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    // Replace with steam API key
    const apiKey = "_STEAM_API_KEY";

    const appId = //; 

    // Use the Steam API to get details for the specified game
    SteamAPI.getAppDetails(appId, apiKey).then((data) => {
      setGameDetails(data);
    });
  }, []);

  return (
    <PageContainer title="Game Details">
      {gameDetails ? (
        <div className={classes.gameDetails}>
          <h1>{gameDetails.name}</h1>
          <p>{gameDetails.short_description}</p>
          <img src={gameDetails.header_image} alt={gameDetails.name} />
        </div>
      ) : (
        <p>Loading game details...</p>
      )}
    </PageContainer>
  );
}

export default Game;