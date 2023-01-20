import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Individuals from "../../Pages/Individuals/Individuals";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Pricing from "../../Pages/Pricing/Pricing";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import Teams from "../../Pages/Teams/Teams";

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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
