import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  console.log(loggedIn);

  const signIn = async (username, password) => {
    try {
      const res = await axios.post("api/auth/login", { username, password });
      const { token, foundUser } = res.data;
      localStorage.setItem("token", token);
      setUser(foundUser);
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (username, password) => {
    try {
      const res = await axios.post("api/auth/signup", { username, password });
      const { token, foundUser } = res.data;
      localStorage.setItem("token", token);
      setUser(foundUser);
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signIn, signUp, loggedIn, setLoggedIn, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
