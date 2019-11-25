import * as React from "react";
import * as RX from "reactxp";
import { NavigationContext } from '../navigator/navigationContext';
import FacebookLoginWeb from "react-facebook-login";
import { User } from '../navigator/navigator';
function getFacebookLoginButton(onLogin: (user: User) => void) {
    if (window.location) {
        return (
            <FacebookLoginWeb
                appId="943794862660909"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile"
                callback={onLogin}
            />
        );
    }
    // replace with native button
    return null;
}
export class Login extends RX.Component {
    render() {
        return (
            <RX.View>
                <NavigationContext.Consumer>
                    {
                        context => (
                            getFacebookLoginButton(context.onLogin)
                        )
                    }
                </NavigationContext.Consumer>
            </RX.View>
        );
    }
}
