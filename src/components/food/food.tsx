import React from 'react';
import RX from 'reactxp';
import { Food as FoodType } from "../../generated-models";

interface FoodProps {
    food: Pick<FoodType, "id" | "description" | "name" | "url" | "price">;
}

const imageStyle: RX.Types.ImageStyle = {
    width: 500,
    height: 100
}

const FoodStyle: RX.Types.ViewStyle = {
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
    alignItems: "center",
    justifyContent: "center",
    wordBreak: "break-word",
    flex: 1
}

const nameStyle: RX.Types.TextStyle = {
    fontWeight: "600"
}

export const Food = (props: FoodProps) => {
    const { name, url, description, price } = props.food;
    return (
        <RX.View style={FoodStyle}>
            {url && <RX.Image resizeMode="cover" style={imageStyle} source={url} />}
            <RX.Text style={nameStyle}>{name}</RX.Text>
            <RX.Text>{description}</RX.Text>
            <RX.Text>{price}</RX.Text>
        </RX.View>
    );
}