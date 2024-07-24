import { createBrowserRouter, Navigate } from "react-router-dom";
import Profile from "../../pages/profile.page";
import Listing from "../../pages/listing.page";
import { APP_ROUTES } from "../constants/routes.constant";

const routes = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <Navigate to={"/listing"} replace />,
  },
  {
    path: APP_ROUTES.LISTING,
    element: <Listing />,
  },
  {
    path: APP_ROUTES.PROFILE,
    element: <Profile />,
  },
]);

export default routes;
