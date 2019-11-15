import React from 'react';
import RX from 'reactxp';
import { FoodsComponent } from "../../generated-models";
import { INavigationContext } from '../navigator/navigator';
import { Food } from '../food/food';
import { WithNavigation } from '../navigator/navigatorPage';

const restaurantsListStyle: RX.Types.ViewStyle = {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    overflow: 'visible',
    backgroundColor: "white"
}

const backStyle: RX.Types.TextStyle = {
    margin: 20,
    fontWeight: "600"
}


const FoodListInternal = (props: INavigationContext) => {
    const { restaurantId } = props.navigatorState.FoodList;
    return (
        <FoodsComponent variables={{ restaurantsId: restaurantId }}>
            {
                ({ data }) => {
                    if (!data || !data.food_aggregate) {
                        return <RX.Text>Error</RX.Text>;
                    }
                    return (
                        <RX.View style={restaurantsListStyle}>
                            <RX.Text>{restaurantId}</RX.Text>
                            <RX.Text style={backStyle} onPress={props.goBack}>Back to restaurants</RX.Text>
                            {
                                data.food_aggregate.nodes.map(food => (
                                    <Food key={food.id} food={food}></Food>
                                ))
                            }
                        </RX.View>
                    );
                }
            }
        </FoodsComponent>
    );
};

export const FoodList = WithNavigation(FoodListInternal);