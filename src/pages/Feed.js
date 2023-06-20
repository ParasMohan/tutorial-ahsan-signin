import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const { loggedIn, user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/signin");
    }
  }, []);

  return <div>This is the feed page, hi {user?.firstName}</div>;
};

export default Feed;
