import React from "react";
import welcomeImg from "../../../public/images/welcome.jpg";

export const LandingPage = () => {
  return (
    <div>
      <img
        style={{ height: "500px", width: "100%", margin: "auto" }}
        src={welcomeImg}
        alt="welcome"
      />
    </div>
  );
};
