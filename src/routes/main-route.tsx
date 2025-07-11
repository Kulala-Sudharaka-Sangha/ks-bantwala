import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RoutesList } from "../utils/master-menu";
import Home from "../pages/home-page/Home";
import MembershipRegistration from "../pages/membership-registration/MembershipRegistration";
import CommitteeMembers from "../pages/committee-members/CommitteeMembers";
import { Gallery } from "../pages/gallery/Gallery";
import ContactPage from "../pages/contact-page/ContactPage";
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
        path: RoutesList.COMMITTEE_MEMBERS,
        element: <CommitteeMembers />,
      },
      {
        path: RoutesList.MEMBERS_LIST,
        element: <MembersList />,
      },
      {
        path: RoutesList.GALLERY,
        element: <Gallery />,
      },
      {
        path: RoutesList.CONTACT_US,
        element: <ContactPage />,
      },
      {
        path: RoutesList.NOT_FOUND,
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default appRouter;
