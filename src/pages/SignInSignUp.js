import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignInSignUp = () => {
  const { signIn, loggedIn, signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(loggedIn, "from sign in");
  if (loggedIn === true) {
    navigate("/");
  }
  //   if (loggedIn !== false) {
  //     navigate("/signin");
  //   }

  const handleSignIn = async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    try {
      await signIn(username, password);
    } catch (error) {
      console.log("cant long in", error);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    try {
      await signUp(username, password);
    } catch (error) {
      console.log("cant sign Up", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <label>
          Email
          <input type="text" required></input>
        </label>
        <label>
          Password
          <input type="password" required></input>
        </label>
        <button type="submit">Sign In</button>
      </form>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label>
          Email
          <input type="text" required></input>
        </label>
        <label>
          Password
          <input type="password" required></input>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignInSignUp;
