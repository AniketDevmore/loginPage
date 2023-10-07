import React from "react";

export const LandingPage = () => {
  let onlineCheck = navigator.onLine ? true : false;

  return (
    <>
      {onlineCheck ? (
        <div style={{ textAlign: "center" }} className="container">
          <h1>Welcome</h1>
        </div>
      ) : (
        <div>Offline</div>
      )}
    </>
  );
};
