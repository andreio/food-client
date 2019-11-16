
import { Types } from 'reactxp-navigation';
import * as React from "react";
import { RouteState, Pages } from './navigator';

export interface INavigationContext {
    route: Types.NavigatorRoute;
    navigate: <K extends Pages>(routeId: K, data: RouteState[K]) => void;
    goBack: () => void;
    navigatorState: RouteState;
    page: Pages;
}

export const NavigationContext = React.createContext<INavigationContext>({} as INavigationContext);

export const useNavigationContext = () => React.useContext(NavigationContext);

export const WithNavigationContext = <P extends INavigationContext>(Klazz: (p: P) => JSX.Element) => (props: any) => {
    const { route, page, navigate, goBack, navigatorState } = useNavigationContext();
    return (<Klazz {...props}
        navigatioRoute={route}
        page={page}
        navigate={navigate}
        goBack={goBack}
        navigatorState={navigatorState} />);
};