
import * as RX from 'reactxp';
import Navigator, { Types } from 'reactxp-navigation';
import * as React from "react";
import { RestaurantsList } from '../restaurantsList/restaurants-list';
import { FoodList } from '../foodList/foodList';

export type Pages = "Home" | "FoodList" | "User" | "RestaurantDetails" | "OrderList" | "OrderDetails";

export const NavigationRouteId: { [type in Pages]: number } = {
    Home: 0,
    FoodList: 1,
    User: 2,
    RestaurantDetails: 3,
    OrderList: 4,
    OrderDetails: 5
};

export type RouteState = {
    Home: {},
    FoodList: {
        restaurantId: string
    },
    User: {},
    RestaurantDetails: {},
    OrderList: {},
    OrderDetails: {}
};

type AppNavigatorState = {
    routeState: RouteState,
    page: Pages
}

export class AppNavigator extends RX.Component<undefined, AppNavigatorState> {
    private _navigator: Navigator | undefined;

    constructor(props: any) {
        super(props);
        this.state = {
            routeState: {
                FoodList: {
                    restaurantId: ""
                },
                Home: {},
                OrderDetails: {},
                OrderList: {},
                RestaurantDetails: {},
                User: {}
            },
            page: "Home"
        };
    }

    render() {
        return (
            <Navigator
                ref={this._onNavigatorRef}
                renderScene={this._renderScene}
            />
        );
    }

    private _onNavigatorRef = (navigator: Navigator) => {
        if (navigator && !this._navigator) {
            navigator.immediatelyResetRouteStack([{
                routeId: NavigationRouteId.Home,
                sceneConfigType: Types.NavigatorSceneConfigType.Fade
            }]);
        }
        this._navigator = navigator;
    }

    navigate = <K extends Pages>(page: K, data: RouteState[K]): void => {
        this.setState({
            routeState: {
                ...this.state.routeState,
                [page]: data
            },
            page
        }, () => this._navigator!!!.push({
            routeId: NavigationRouteId[page],
            sceneConfigType:
                Types.NavigatorSceneConfigType.FloatFromRight
        }));
    }

    goBack = () => this._navigator!!!.pop();

    private _renderScene = (navigatorRoute: Types.NavigatorRoute) => {
        let renderedRoute: JSX.Element = (<RestaurantsList />);
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.FoodList:
                renderedRoute = <FoodList />
        }
        const context: INavigationContext = {
            navigate: this.navigate,
            goBack: this.goBack,
            navigatorState: this.state.routeState,
            route: navigatorRoute,
            page: this.state.page
        }

        return (
            <NavigationContext.Provider value={context}>
                {renderedRoute}
            </NavigationContext.Provider>
        );
    }
}

export interface INavigationContext {
    route: Types.NavigatorRoute;
    navigate: <K extends Pages>(routeId: K, data: RouteState[K]) => void;
    goBack: () => void;
    navigatorState: RouteState;
    page: Pages;
}

const NavigationContext = React.createContext<INavigationContext>({} as INavigationContext);

export const useNavigationContext = () => React.useContext(NavigationContext);
