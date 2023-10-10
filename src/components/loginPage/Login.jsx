import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //   new user handle
  const newUserHandle = () => {
    navigate("/newUser");
  };

  const changeHandle = (event) => {
    let data = { ...loginData, [event.target.name]: event.target.value };
    setLoginData(data);
  };

  //   login new user
  const loginHandle = () => {
    if (loginData.email !== localStorage.getItem("email")) {
      setError({ ...error, ["email"]: "Write Correct Email" });
    } else if (loginData.password !== localStorage.getItem("password")) {
      setError({
        ...error,
        ["email"]: "",
        ["password"]: "Write Correct Password",
      });
    } else {
      sessionStorage.setItem("token", "hiuhifhhjbjbsjgw729vfv22vch");
      navigate("/landingPage");
    }
  };

  return (
    <div className="container">
      <div className="outerContainer">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write Your Email Here..."
          onChange={changeHandle}
        />
        <p style={{ color: "red" }}>{error.email}</p>
      </div>

      <div className="outerContainer">
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Write Your Password Here..."
          onChange={changeHandle}
        />
        <p style={{ color: "red" }}>{error.password}</p>
      </div>

      <div className="outerContainer">
        <button onClick={loginHandle} className="btn">
          Login
        </button>
        <button onClick={newUserHandle} className="btn">
          New User
        </button>
      </div>
    </div>
  );
};
