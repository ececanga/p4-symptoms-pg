import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router";
import app from "./base.js";
import {AuthContext} from "./Auth.js";

import "./Form.css"

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>;
    }

    return (
        <div className={"form-box"}>
            <h5>COVID MONITORING PAGE</h5>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password"/>
                </label>
                <button className="submitBtn" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default withRouter(Login);
