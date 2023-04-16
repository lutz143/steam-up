import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";

import PageContainer from "../containers/PageContainer";
import classes from "./Game.module.css";
import { BiUpvote, BiDownvote } from "react-icons/bi";

import { QUERY_SINGLE_GAME } from '../utils/queries';
import { ADD_VOTE } from '../utils/mutations';
import { DOWN_VOTE } from '../utils/mutations';
import { ADD_COMMENT } from '../utils/mutations';

import Auth from '../utils/auth';


const Game = () => {
  const { gameId } = useParams();

  const { loading, data, refetch } = useQuery(QUERY_SINGLE_GAME, {
    // pass URL param
    variables: { gameId: gameId },
  });

  const game = data?.game || {};

  const [Upvote, { errorUp }] = useMutation(ADD_VOTE);
  const [downVote, { errorDown }] = useMutation(DOWN_VOTE);
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { errorComment }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          gameId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });
      await refetch();
      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  const handleVote = async () => {
    try {
      await Upvote({
        variables: { gameId: gameId },
      });
      await refetch();
    }
    catch (err) {
      console.error(err);
    }
  };

  const handleDownVote = async () => {
    try {
      await downVote({
        variables: { gameId: gameId },
      });
      await refetch();
    }
    catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer title="Game Details">
        <div>
          <img src={game.image} alt={game.title} className={classes.coverArt} />
          <div className={classes.detailHolder}>
            <h1 className={classes.gameTitle}>{game.title}</h1>
            <p className={classes.desc}>
              {game.description}
            </p>
          </div>
          {loading ? (
          <div>Loading...</div>
          ) : (
            <div className={classes.vote}>
              <a>
                <BiUpvote className={classes.voteArrowUp} onClick={() => handleVote(1)}/>
              </a>
              <span>
                {" "}Vote:{" "}{game.upVotes}{" "}
              </span>
              <a>
                <BiDownvote className={classes.voteArrowDown} onClick={() => handleDownVote(1)}/>
              </a>
            </div>
          )}
            <h2 className={classes.commentsTitle}>Comments</h2>
            <textarea 
              className={classes.addComment} 
              name="commentText"
              placeholder='Add a comment..'
              value={commentText}
              onChange={handleChange}
            ></textarea>
            <button className={classes.addCommentBtn} onClick={handleFormSubmit}>Submit</button>
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
        <p>Loading game details...</p>
    </PageContainer>
  );
}

export default Game;
