import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import {  split } from 'apollo-link';
import  { InMemoryCache } from "apollo-boost";
import { config } from './config';
import { ROUTES } from './helpers/routes';
import DashboardContainer from './components/dashboard/DashboardContainer';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import ApolloClient from 'apollo-client'

const httpLink = new HttpLink({
  uri: config.SERVER_URI
});


const wsLink = new WebSocketLink({
  uri: `ws://localhost:8070/graphql`,
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
        addTypename: false
      }),
      onError: ({ networkError, graphQLErrors }) => {
        console.log("graphQLErrors", graphQLErrors);
        console.log("networkError", networkError);
      },
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
            <Switch>
              <Route path={ROUTES.Dashboard} component={DashboardContainer}/>
            </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
