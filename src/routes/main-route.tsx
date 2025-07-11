import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RoutesList } from "../utils/master-menu";
import Home from "../pages/home-page/Home";
import MembershipRegistration from "../pages/membership-registration/MembershipRegistration";
import MembersList from "../pages/members-list/MembersList";

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
        path: RoutesList.MEMBERSHIP_REGISTRATION,
        element: <MembershipRegistration />,
      },
      {
        path: RoutesList.MEMBERS_LIST,
        element: <MembersList />,
      },
      {
        path: RoutesList.NOT_FOUND,
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default appRouter;
