import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://notwasted2.herokuapp.com/v1/graphql',
});