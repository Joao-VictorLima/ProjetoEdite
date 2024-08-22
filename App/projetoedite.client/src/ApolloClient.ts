// src/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://localhost:7232/graphql',
  cache: new InMemoryCache(),
});

export default client;