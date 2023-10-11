import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import passwordValidator from "password-validator";
import { useEffect } from "react";

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
  const passwordSchema = new passwordValidator();

  // password validation
  const validatePassword = (value) => {
    passwordSchema
      .is()
      .min(8)
      .has()
      .digits(1)
      .has()
      .symbols(1)
      .has()
      .uppercase(1);

    if (passwordSchema.validate(value)) {
      setError({ ...error, ["password"]: "" });
      return value;
    } else {
      setError({
        ...error,
        ["password"]:
          "Password should contain atleast one number and one special charactor, one capital letter and should be 8 digits long!",
      });
    }
  };

  // error handling function
  const addError = (name) => {
    for (let err in error) {
      if (err === name) {
        setError({ ...error, [name]: `Please enter ${name}` });
      }
    }
  };

  const removeError = () => {
    setError({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confPass: "",
    });
  };

  //  input value change handler
  const changehandler = (event) => {
    let name = event.target.name;
    let data = event.target.value;
    if (name === "password") {
      if (validatePassword(data)) {
        setNewUserData({ ...newUserData, [name]: data });
      }
    } else {
      setNewUserData({ ...newUserData, [name]: data });
    }
  };

  //  new user button handler
  const newUserSubmitHandler = (e) => {
    e.preventDefault();
    if (!newUserData.firstName) {
      removeError();
      addError("firstName");
    } else if (!newUserData.lastName) {
      removeError();
      addError("lastName");
    } else if (!newUserData.email) {
      removeError();
      addError("email");
    } else if (!newUserData.mobile) {
      removeError();
      addError("mobile");
    } else if (!newUserData.password) {
      removeError();
      addError("password");
    } else if (!newUserData.confPass) {
      removeError();
      addError("confPass");
    } else {
      if (newUserData.password !== newUserData.confPass) {
        alert("Please Confirm Your Password!");
      } else {
        removeError();
        localStorage.setItem("firstName", newUserData.firstName);
        localStorage.setItem("lastName", newUserData.lastName);
        localStorage.setItem("email", newUserData.email);
        localStorage.setItem("mobile", newUserData.mobile);
        localStorage.setItem("password", newUserData.password);
        navigate("/");
      }
    }
  };

  useEffect(() => {
    setError({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confPass: "",
    });
  }, [newUserData]);
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
        {error.firstName === "" ? null : (
          <p style={{ color: "red" }}>{error.firstName}</p>
        )}
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
        {error.lastName === "" ? null : (
          <p style={{ color: "red" }}>{error.lastName}</p>
        )}
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
        {error.email === "" ? null : (
          <p style={{ color: "red" }}>{error.email}</p>
        )}
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
        {error.mobile === "" ? null : (
          <p style={{ color: "red" }}>{error.mobile}</p>
        )}
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
        {error.password === "" ? null : (
          <p style={{ color: "red" }}>{error.password}</p>
        )}
      </div>

      <div className="outerContainer">
        <label htmlFor="confPass">Confirm Password: </label>
        <input
          onChange={changehandler}
          id="confPass"
          name="confPass"
          placeholder="Confirm Password"
          type="text"
        />
        {error.confPass === "" ? null : (
          <p style={{ color: "red" }}>{error.confPass}</p>
        )}
      </div>

      <div className="outerContainer">
        <button onClick={newUserSubmitHandler} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
