import { Outlet, createBrowserRouter } from "react-router-dom";
import NotFound from "./app/NotFound";
import Page from "./Page";
import Splash from "./app/Splash";
import Tour from "./app/Tour";
import Qr from "./app/Qr";
import Fav from "./app/Fav";
import Menu from "./app/Menu";
import TourDetail from "./app/TourDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Splash />,
      },
      {
        path: "home",
        element: <Page />,
      },
      {
        path: "tour",
        element: <Tour />,
      },
      {
        path: "qr",
        element: <Qr />,
      },
      {
        path: "fav",
        element: <Fav />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "tour/:id",
        element: <TourDetail />,
      },
    ],
  },
]);

export default router;
