import React, { useEffect, useState } from "react";
import welcomeImg from "../../../public/images/welcome.jpg";

export const LandingPage = () => {
  const [online, setOnline] = useState(navigator.onLine);

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
        <img src={welcomeImg} alt="welcome" />
      ) : (
        <img src="" alt="offline" />
      )}
    </div>
  );
};
