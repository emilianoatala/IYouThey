import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { config } from './config';
import { ROUTES } from './helpers/routes';
import DashboardContainer from './components/users/DashboardContainer';

const client = new ApolloClient({
  uri: config.SERVER_URI,
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});

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
