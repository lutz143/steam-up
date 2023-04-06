import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";



function App() {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={x} />
            <Route exact path='/y' component={y} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;