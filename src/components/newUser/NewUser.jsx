import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewUser = () => {
  const navigate = useNavigate();
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confPass: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confPass: "",
  });

  const changehandler = (event) => {
    let data = { ...newUserData, [event.target.name]: event.target.value };
    setNewUserData(data);
  };

  const newUserSubmitHandler = () => {
    // e.preventDefault();
    if (!newUserData.firstName) {
      setError({ ["firstName"]: "Write First Name" });
    } else if (!newUserData.lastName) {
      setError({
        ...error,
        ["firstName"]: "",
        ["lastName"]: "Write Last Name",
      });
    } else if (!newUserData.email) {
      setError({ ...error, ["lastName"]: "", ["email"]: "Write Eamil" });
    } else if (!newUserData.mobile) {
      setError({ ...error, ["email"]: "", ["mobile"]: "Write Mobile Number" });
    } else if (!newUserData.password) {
      setError({ ...error, ["mobile"]: "", ["password"]: "Write Password" });
    } else {
      // check for length
      if (newUserData.password.length < 8) {
        setError({
          ...error,
          ["confPass"]: "",
          ["password"]: "Password should be atleat 8 digit long",
        });
      } else {
        // check for special charctor
        let flag = false;
        for (let i = 0; i < newUserData.password.length; i++) {
          if (
            newUserData.password[i] === "!" ||
            newUserData.password[i] === "@" ||
            newUserData.password[i] === "#" ||
            newUserData.password[i] === "$" ||
            newUserData.password[i] === "%" ||
            newUserData.password[i] === "^" ||
            newUserData.password[i] === "&" ||
            newUserData.password[i] === "*"
          ) {
            flag = true;
          }
        }

        if (!flag) {
          setError({
            ...error,
            ["confPass"]: "",
            ["password"]:
              "Password should contain atleast one special charactor",
          });
        } else {
          if (newUserData.password !== newUserData.confPass) {
            setError({
              ...error,
              ["password"]: "",
              ["confPass"]: "Confirm Password",
            });
          } else {
            setError({ ...error, ["confPass"]: "" });
            localStorage.setItem("firstName", newUserData.firstName);
            localStorage.setItem("lastName", newUserData.lastName);
            localStorage.setItem("email", newUserData.email);
            localStorage.setItem("mobile", newUserData.mobile);
            localStorage.setItem("password", newUserData.password);
            navigate("/");
          }
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="outerContainer">
        <label htmlFor="firstName">First Name: </label>
        <input
          onChange={changehandler}
          id="firstName"
          name="firstName"
          placeholder="Write your first name here..."
          type="text"
        />
        <p style={{ color: "red" }}>{error.firstName}</p>
      </div>

      <div className="outerContainer">
        <label htmlFor="lastName">Last Name: </label>
        <input
          onChange={changehandler}
          id="lastName"
          name="lastName"
          placeholder="Write your last name here..."
          type="text"
        />
        <p style={{ color: "red" }}>{error.lastName}</p>
      </div>

      <div className="outerContainer">
        <label htmlFor="email">Email: </label>
        <input
          onChange={changehandler}
          id="email"
          name="email"
          placeholder="Write your email here..."
          type="email"
        />
        <p style={{ color: "red" }}>{error.email}</p>
      </div>

      <div className="outerContainer">
        <label htmlFor="mobile">Mobile No.: </label>
        <input
          onChange={changehandler}
          id="mobile"
          name="mobile"
          placeholder="Write your mobile number here..."
          type="tel"
        />
        <p style={{ color: "red" }}>{error.mobile}</p>
      </div>

      <div className="outerContainer">
        <label htmlFor="password">Password: </label>
        <input
          onChange={changehandler}
          id="password"
          name="password"
          placeholder="Write your password here..."
          type="text"
        />
        <p style={{ color: "red" }}>{error.password}</p>
      </div>

      <div className="outerContainer">
        <label htmlFor="confPass">Confirm Password: </label>
        <input
          onChange={changehandler}
          id="confPass"
          name="confPass"
          placeholder="Cconfirm Password"
          type="text"
        />
        <p style={{ color: "red" }}>{error.confPass}</p>
      </div>

      <div className="outerContainer">
        <button onClick={newUserSubmitHandler} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
