import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RoutesList } from "../utils/master-menu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: RoutesList.HOME,
        element: <div>Home</div>,
      },
      {
        path: RoutesList.NOT_FOUND,
        element: <div>Menu 1</div>,
      },
    ],
  },
]);

export default appRouter;
