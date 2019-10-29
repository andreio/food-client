import React from 'react';
import RX from 'reactxp';
import { client } from "./data/apollo-client";
import { ApolloProvider } from '@apollo/react-common';
import { RestaurantsComponent} from "./generated-models";

export class App extends RX.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <RestaurantsComponent>
          {
            ({data})=>{
              if(!data || !data.restaurants) {
                return <RX.Text>Bla</RX.Text>;
              }
              const text = data.restaurants.map(restaurant => <RX.Text>{restaurant.name}</RX.Text>);
              return <RX.View>
                {text}
              </RX.View>
            }
          }
        </RestaurantsComponent>
    </ApolloProvider>
    );
  }
}
