import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import ApolloClient from 'apollo-client'
import {  split } from 'apollo-link';
import  { InMemoryCache } from "apollo-boost";
import { config } from './config';
import { setContext } from 'apollo-link-context';



const httpLink = new HttpLink({
    uri: config.SERVER_URI,
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token")
    return {
      headers: {
        ...headers,
        authorization: token 
      }
    }
  });
  
  
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:8070/graphql`,
    options: {
      reconnect: true
    },
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
  
  
  export const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache({
          addTypename: false
        }),
        onError: ({ networkError, graphQLErrors }) => {
          console.log("graphQLErrors", graphQLErrors);
          console.log("networkError", networkError);
        },
  })