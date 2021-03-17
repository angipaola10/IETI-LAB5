import React from "react";
import {Redirect, Route} from "react-router-dom";

export function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem("loggingStaus") === "logged"
                 ? <Component {...props} /> : <Redirect to="/"/>;
            }}
        />
    )
}