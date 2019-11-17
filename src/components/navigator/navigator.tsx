
import * as RX from 'reactxp';
import Navigator, { Types } from 'reactxp-navigation';
import * as React from "react";
import { RestaurantsList } from '../restaurantsList/restaurants-list';
import { FoodList } from '../foodList/foodList';
import { NavigationContext, INavigationContext } from "./navigationContext";
import { Login } from '../login/login';

export type Pages = "Home" | "FoodList" | "User" | "RestaurantDetails" | "OrderList" | "OrderDetails" | "Login";
export type User = {
    accessToken: string;
    id: string;
    name?: string;
    pictureUrl: string;
} & { picture: { data: { url: string } } };

export const NavigationRouteId: { [type in Pages]: number } = {
    Home: 0,
    FoodList: 1,
    User: 2,
    RestaurantDetails: 3,
    OrderList: 4,
    OrderDetails: 5,
    Login: 6
};

export type RouteState = {
    Home: {},
    FoodList: {
        restaurantId: string
    },
    User: {},
    RestaurantDetails: {},
    OrderList: {},
    OrderDetails: {},
    Login: {}
};

type AppNavigatorState = {
    routeState: RouteState,
    page: Pages,
    user: User | null
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
                User: {},
                Login: {}
            },
            page: "Login",
            user: null
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
                routeId: NavigationRouteId.Login,
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
    onLogin = (user: User) => {
        this.setState({ user }, () => this.navigate("Home", {}));
    };

    private _renderScene = (navigatorRoute: Types.NavigatorRoute) => {
        let renderedRoute: JSX.Element = (<Login />);
        if (this.state.user !== null) {
            switch (navigatorRoute.routeId) {
                case NavigationRouteId.FoodList:
                    renderedRoute = <FoodList />
                    break;
                case NavigationRouteId.Home:
                    renderedRoute = <RestaurantsList />
            }
        }
        const context: INavigationContext = {
            navigate: this.navigate,
            goBack: this.goBack,
            navigatorState: this.state.routeState,
            route: navigatorRoute,
            page: this.state.page,
            onLogin: this.onLogin,
            user: this.state.user
        }

        return (
            <NavigationContext.Provider value={context}>
                {renderedRoute}
            </NavigationContext.Provider>
        );
    }
}

