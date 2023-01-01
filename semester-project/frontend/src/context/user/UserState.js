import React from "react";
import { useState } from "react";
import UserContext from "./userContext";

const serverPort = 6969;
const host = `http://localhost:${serverPort}`;

const UserState = (props) => {
  const [user, setUser] = useState("");

  // Get user Data
  const getUserData = async () => {
    // API Call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const json = await response.json();

    setUser(json);

    console.log("json: ", json);
    return json;
  };

  return (
    <UserContext.Provider value={{ user, getUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
