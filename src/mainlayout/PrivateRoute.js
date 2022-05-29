import {
    Redirect, Route,
} from "react-router-dom";
import { getDecodedToken, getToken, ROLE_TYPE } from "../utils";

const isAuthenticated = (getToken() && getToken().length > 0);

const RoleChecker = (props) => {
    const { superadminOnly, component: Component } = props;

    const decoded = getDecodedToken();

    if (decoded.data.role === ROLE_TYPE.EMPLOYEE && superadminOnly) {
        return <Redirect
            to={{
                pathname: "/dashboard",
                state: { from: props.location },
            }}
        />
    }

    return <Component {...props} />
}

export default ({ component, ...rest }) => (
    <Route
        {...rest}
        render={props => (isAuthenticated ? (
            <RoleChecker {...props} {...rest} {...{ component }} />
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