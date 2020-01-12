import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cache = new InMemoryCache().restore((window as any).__APOLLO_STATE__);
const link = new HttpLink({
  uri: '/graphql',
  credentials: 'include'
});
// const cache = new InMemoryCache();

const client = new ApolloClient({
  // credentials: 'include',
  link,
  cache
  // cacheRedirects: {
  //   Query: {
  //     post: (_, { id }, { getCacheKey }) => getCacheKey({ id, __typename: 'Post' })
  //   }
  // }
});

// (window as any).client = client;

export default client;
