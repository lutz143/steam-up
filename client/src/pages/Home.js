import { useQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect } from 'react';
import { QUERY_ME } from "../utils/queries";
import { QUERY_GAME } from "../utils/queries";

import PageContainer from "../containers/PageContainer";
import { Link } from 'react-router-dom';
import classes from "./Home.module.css";
import { Nav } from 'react-bootstrap';


function Home() {

  const { loading, error, data } = useQuery(QUERY_GAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <PageContainer>
      <h1>Welcome to Steam Up!</h1>
      <h2>Check out what's popular today!</h2>
      <section className={classes.gridContainer}>
        {data.search.map((game, index) => 
          <Nav.Link className={classes.gridCard} as={Link} to={`/game/${game._id}`}>
            <img src={game.image} alt={game.description}></img>
            <p>{game.title}</p>
          </Nav.Link>)}
      </section>
    </PageContainer>
  );
}

export default Home