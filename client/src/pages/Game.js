import React, { useState, useEffect } from "react";
import PageContainer from "../containers/PageContainer";
import classes from "./Game.module.css";
import { BiUpvote, BiDownvote } from "react-icons/bi";


import { QUERY_SINGLE_GAME } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";




function Game(props) {
  const { gameId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_GAME, {
    // pass URL param
    variables: { gameId: gameId },
  });

  const game = data?.game || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer title="Game Details">
      {props ? (
        <div>
          <img src={game.image} alt={props.name} className={classes.coverArt} />
          <div className={classes.detailHolder}>
            <h1 className={classes.gameTitle}>{game.title}</h1>
            <p className={classes.desc}>
              {game.description}
            </p>
          </div>
          <div className={classes.vote}>
            <a>
              <BiUpvote />
            </a>{" "}
            Vote:{" "}{game.upVotes}{" "}
            <a>
              <BiDownvote />
            </a>
          </div>
          <h2 className={classes.commentsTitle}>Comments</h2>
          <textarea className={classes.addComment} placeholder='Add a comment..'></textarea>
          <button class={classes.addCommentBtn}>Submit</button>
          {/* Placeholder example comments - Would be replaced with database data running through the Comment function above */}
          {/* {game.comments.map((game, index) =>  */}
          {game.comments.map((comment, index) => 
            <div className={classes.commentsHolder}>
              <a className={classes.username}>{comment.commentAuthor}, </a>
              <span>{comment.createdAt}</span>
              <p className={classes.comment}>{comment.commentText}</p>              
            </div>)}
          {/* End of placeholder example comments */}
        </div>
      ) : (
        <p>Loading game details...</p>
      )}
    </PageContainer>
  );
}

export default Game;
