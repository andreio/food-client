import React from 'react';
import RX from 'reactxp';
import { client } from "./data/apollo-client";
import { ApolloProvider } from '@apollo/react-common';
import { RestaurantsList } from './components/restaurantsList/restaurants-list';

export class App extends RX.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <RestaurantsList></RestaurantsList>
      </ApolloProvider>
    );
  }
}
