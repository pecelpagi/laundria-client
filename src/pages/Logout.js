import { useEffect } from "react";
import { removeToken } from "../utils";

export default ({ history }) => {
    useEffect(() => {
        removeToken();
        history.push('/signin');
    }, []);

    return (<div />);
}