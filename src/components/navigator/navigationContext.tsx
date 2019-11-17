
import { Types } from 'reactxp-navigation';
import * as React from "react";
import { RouteState, Pages, User } from './navigator';

export interface INavigationContext {
    route: Types.NavigatorRoute;
    navigate: <K extends Pages>(routeId: K, data: RouteState[K]) => void;
    goBack: () => void;
    navigatorState: RouteState;
    page: Pages;
    onLogin: (user: User) => void;
    user: User | null;
}

export const NavigationContext = React.createContext<INavigationContext>({} as INavigationContext);

export const useNavigationContext = () => React.useContext(NavigationContext);
