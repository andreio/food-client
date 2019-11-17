import React from 'react';
import RX from 'reactxp';
import { RestaurantsComponent } from "../../generated-models";
import { Restaurant } from "../restaurant/restaurant";
import { useNavigationContext } from '../navigator/navigationContext';

const restaurantsListStyle: RX.Types.ViewStyle = {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    overflow: 'visible',
    backgroundColor: "white"

}

export const RestaurantsList = () => {
    const { user } = useNavigationContext();
    return (
        <RestaurantsComponent>
            {
                ({ data }) => {
                    if (!data || !data.restaurant_aggregate) {
                        return <RX.Text>Error</RX.Text>;
                    }
                    return (
                        <RX.View style={restaurantsListStyle}>
                            <RX.Text>Hello,{user!!!.name}</RX.Text>
                            {
                                data.restaurant_aggregate.nodes.map(restaurant => (
                                    <Restaurant key={restaurant.id} restaurant={restaurant}></Restaurant>
                                ))
                            }
                        </RX.View>
                    );
                }
            }
        </RestaurantsComponent>
    );
};
