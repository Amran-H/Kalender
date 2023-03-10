import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Individuals from "../../Pages/Individuals/Individuals/Individuals";
import Integrations from "../../Pages/Integrations/Integrations";
import Login from "../../Pages/Login/Login";
import MySchedule from "../../Pages/MySchedule/MySchedule";
import NotFound from "../../Pages/NotFound/NotFound";
import Pricing from "../../Pages/Pricing/Pricing";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import BuyNow from "../../Pages/Shared/BuyNow/BuyNow";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Teams from "../../Pages/Teams/Teams/Teams";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/individuals",
        element: <Individuals></Individuals>,
      },
      {
        path: "/teams",
        element: <Teams></Teams>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/integrations",
        element: <Integrations></Integrations>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/mySchedule",
        element: <PrivateRoute><MySchedule></MySchedule></PrivateRoute>,
      },
      {
        path: "/buyNow",
        element: <PrivateRoute><BuyNow></BuyNow></PrivateRoute>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
