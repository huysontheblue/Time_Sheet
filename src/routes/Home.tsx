import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from '../utils/LocalStorage'

const Home: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
}> = (props) => {
    const accessToken = getAccessToken();
    return !accessToken ? (
        <Route path={props.path} component={props.component} exact={props.exact} />
    ) : (
        <Redirect to="/app/Home" />
    );
};

export default Home;
