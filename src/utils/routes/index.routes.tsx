import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home.page";
import Profile from "../../pages/profile.page";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
    }
  ]);

export default routes;
