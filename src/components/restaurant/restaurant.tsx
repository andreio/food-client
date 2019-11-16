import React from 'react';
import RX from 'reactxp';
import { Restaurant as RestaurantType } from "../../generated-models";
import { useNavigationContext } from '../navigator/navigationContext';

interface RestaurantProps {
    restaurant: RestaurantType
}

const imageStyle: RX.Types.ImageStyle = {
    width: 500,
    height: 100
}

const restaurantStyle: RX.Types.ViewStyle = {
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    overflow: 'visible',
}

const ratingField: RX.Types.ViewStyle = {
    flexDirection: "row"
}

const openingHours: RX.Types.ViewStyle = {
    flexDirection: "row"
}

const nameStyle: RX.Types.TextStyle = {
    fontWeight: "600"
}


export const Restaurant = (props: RestaurantProps) => {
    const { address, closing_hours, name, rating, rating_count, starting_hours, url, id } = props.restaurant;
    const { navigate } = useNavigationContext();
    const navigateCallback = React.useCallback(() => navigate("FoodList", {
        restaurantId: id
    }), [id]);
    return (
        <RX.View style={restaurantStyle} onPress={navigateCallback}>
            {url && <RX.Image resizeMode="cover" style={imageStyle} source={url} />}
            <RX.Text style={nameStyle}>{name}</RX.Text>
            <RX.Text>{address}</RX.Text>
            <RX.View style={ratingField}>
                <RX.Text>Rating: {rating}</RX.Text>
                <RX.Text>({rating_count})</RX.Text>
            </RX.View>
            <RX.View style={openingHours}>
                <RX.Text>Schedule: </RX.Text>
                <RX.Text>{starting_hours}</RX.Text>
                <RX.Text>{closing_hours}</RX.Text>
            </RX.View>
        </RX.View>
    );
}