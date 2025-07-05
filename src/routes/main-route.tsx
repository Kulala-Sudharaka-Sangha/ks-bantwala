import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RoutesList } from "../utils/master-menu";
import Home from "../pages/home-page/Home";
import MembershipRegistration from "../pages/membership-registration/MembershipRegistration";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: RoutesList.HOME,
        element: <Home />,
      },
      {
        path: RoutesList.NOT_FOUND,
        element: <MembershipRegistration />,
      },
    ],
  },
]);

export default appRouter;
