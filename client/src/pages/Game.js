import React, { useState, useEffect } from "react";
import PageContainer from "../containers/PageContainer";
import classes from "./Game.module.css";

function Comment(data) {
  return (
    <div className={classes.commentsHolder}>
      <a className={classes.username}>{data.username}</a>
      <p className={classes.comment}>{data.comment}</p>
    </div>
  );
}

function Game(props) {
  return (
    <PageContainer title="Game Details">
      {props ? (
        <div>
          <img src={props.header} alt={props.name} className={classes.header} />
          <div className={classes.detailHolder}>
            <h1 className={classes.gameTitle}>{props.name}Minecraft</h1>
            <p className={classes.desc}>
              {props.desc}A sandbox block game devloped by Mojang Studios.
            </p>
          </div>
          <h2 className={classes.commentsTitle}>Comments</h2>
          {/* Placeholder example comments - Would be replaced with database data running through the Comment function above */}
          <div className={classes.commentsHolder}>
            <a className={classes.username}>RetroTech</a>
            <p className={classes.comment}>This game is great!</p>
          </div>
          <div className={classes.commentsHolder}>
            <a className={classes.username}>RetroTech</a>
            <p className={classes.comment}>I just beat this game.</p>
          </div>
          <div className={classes.commentsHolder}>
            <a className={classes.username}>RetroTech</a>
            <p className={classes.comment}>I love this game!</p>
          </div>
          {/* End of placeholder example comments */}
        </div>
      ) : (
        <p>Loading game details...</p>
      )}
    </PageContainer>
  );
}

export default Game;
