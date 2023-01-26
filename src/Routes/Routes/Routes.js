import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Integrations from "../../Pages/Integrations/Integrations";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Pricing from "../../Pages/Pricing/Pricing";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import Teams from "../../Pages/Teams/Teams";
import MySchedule from "../../MySchedule/MySchedule";
import Individuals from "../../Pages/Individuals/Individuals";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <MySchedule></MySchedule>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
