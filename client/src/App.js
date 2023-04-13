import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import {
  //ApolloClient,
  //InMemoryCache,
  //ApolloProvider,
  //createHttpLink,
//} from "@apollo/client";
//import { setContext } from "@apollo/client/link/context";

import classes from "./App.css";

import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import Footer from "./containers/Footer";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
   // <ApolloProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </Router>
    //</ApolloProvider>
  );
}

export default App;
