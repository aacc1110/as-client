import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache().restore((window as any).__APOLLO_STATE__);

const client = new ApolloClient({
  // credentials: 'include',
  uri: '/graphql',
  cache
});

(window as any).client = client;

export default client;
