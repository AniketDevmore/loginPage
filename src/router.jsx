import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NewUser } from "./components/newUser/NewUser";
import { LandingPage } from "./components/landingPage/LandingPage";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newUser",
    element: <NewUser />,
  },
  {
    path: "/landingPage",
    element: (
      <PrivateRoute>
        <LandingPage />
      </PrivateRoute>
    ),
  },
]);
