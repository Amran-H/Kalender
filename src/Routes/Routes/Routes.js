import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Individuals from "../../Pages/Individuals/Individuals";
import Login from "../../Pages/Login/Login";
import Pricing from "../../Pages/Pricing/Pricing";
import Register from "../../Pages/Register/Register";
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
        element: <Teams></Teams>
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
