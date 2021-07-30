import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

import "./Form.css"

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
      <div className={"form-box"}>
      <h5>Sign up</h5>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit" className="submitBtn">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
