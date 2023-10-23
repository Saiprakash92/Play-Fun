import React, { useState } from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";
export default function Login({ setUserState, setLoggedIn }) {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUser({ ...user, name: e.target.value });
    } else {
      setUser({ ...user, password: e.target.value });
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const userDetail = JSON.parse(localStorage.getItem("user"));
    setUserState({ userName: user.name, password: user.password });
    if (
      userDetail &&
      userDetail.name === user.name &&
      userDetail.password === user.password
    ) {
      alert("login succuessfully");
      setLoggedIn(true);
    } else {
      alert("invalid user");
    }
  };
  return (
    <div className="container">
      <div className="login">
        <input
          className="input"
          type="text"
          name="userName"
          placeholder="UserName"
          onChange={handleChange}
        />
        <br />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button className="my-element" onClick={handleLogin}>
          Login
        </button>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
}
