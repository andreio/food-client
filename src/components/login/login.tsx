import * as React from "react";
import * as RX from "reactxp";
import { NavigationContext } from '../navigator/navigationContext';
import { LoginButton } from "react-native-fbsdk";
import { User } from '../navigator/navigator';
function getFacebookLoginButton(onLogin: (user: User) => void) {
    if (window.location) {
        const FacebookLoginWeb = require("react-facebook-login");
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
    const FacebookLoginNative = require("react-native-fbsdk");

    return (
        <LoginButton onLoginFinished={(error, loginresult) => { alert(JSON.stringify(loginresult)) }} />
    );
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
