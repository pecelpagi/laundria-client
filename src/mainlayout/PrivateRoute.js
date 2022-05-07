import {
    Redirect, Route,
} from "react-router-dom";
import { getToken } from "../utils";

const isAuthenticated = (getToken() && getToken().length > 0);

export default ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (isAuthenticated ? (
            <Component {...props} {...rest} />
        ) : (
            <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: props.location },
                }}
            />
        ))
        }
    />
);