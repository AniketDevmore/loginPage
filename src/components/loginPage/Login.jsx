import React, { useEffect, useState } from "react";
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
    if (loginData.email === "") {
      setError({ ...error, ["email"]: "Write Correct Email" });
    } else if (loginData.password === "") {
      setError({ ...error, ["password"]: "Write Your Password" });
    } else {
      if (
        loginData.password !== localStorage.getItem("password") &&
        loginData.email !== localStorage.getItem("email")
      ) {
        alert("Invalid Email or Password!");
      } else {
        sessionStorage.setItem("token", "hiuhifhhjbjbsjgw729vfv22vch");
        navigate("/landingPage");
      }
    }
  };

  useEffect(() => {
    setError({
      email: "",
      password: "",
    });
  }, [loginData]);

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
        {error.email === "" ? null : (
          <p style={{ color: "red" }}>{error.email}</p>
        )}
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
        {error.password === "" ? null : (
          <p style={{ color: "red" }}>{error.password}</p>
        )}
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
