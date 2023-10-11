import React, { useEffect, useState } from "react";
import offlineImg from "../../../public/images/offlineImg.jpg";
import { RouterProvider } from "react-router-dom";
import { router } from "../../router";

const OnlineOffline = () => {
  let [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineHandler = () => {
      setOnline(true);
    };

    const offlineHandler = () => {
      setOnline(false);
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);
  return (
    <div>
      {online ? (
        <RouterProvider router={router} />
      ) : (
        <img
          style={{
            height: "500px",
            width: "100%",
          }}
          src={offlineImg}
          alt="offline"
        />
      )}
    </div>
  );
};

export default OnlineOffline;
