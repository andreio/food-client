import React from 'react';
import RX from 'reactxp';
import { client } from "./data/apollo-client";
import { ApolloProvider } from '@apollo/react-common';
import { AppNavigator } from './components/navigator/navigator';

export class App extends RX.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}
