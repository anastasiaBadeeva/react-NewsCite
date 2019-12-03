import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";


const PrivateRoute = ({component: Component, ...rest}) => {
    console.log("------------------orivate",localStorage.getItem("auth")==="false")
    return (
    
        
    <Route

        {...rest}
        render={props =>
            localStorage.getItem("auth")!="false" ? (
                    <Component {...props}/>)

                : (
                    <Redirect to={{
                        pathname: "/login",
                        state :{ from : props.location}
                    }}/>
                )}

    />)};
export default PrivateRoute;
