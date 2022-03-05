import React from "react";
import {NavLink, useParams} from "react-router-dom";
import "../styles/Errors.css"


const ErrorPage = () => {
    const errorCode = useParams()[`*`];
    let message = '';
    if (errorCode === '0signs') {
        message = 'Note must by at least one sign'
    } else  message = 'There is no page here :) Sorry'


    console.log()
    return (
        <>
            <div className="error">
                <h1> Error:
                <p>{message} </p></h1>

                <NavLink to="/"><button  className="go-home">Go back to home page </button></NavLink>

            </div>

        </>
    )
}

export default ErrorPage
