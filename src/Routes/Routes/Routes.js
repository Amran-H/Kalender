import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import MySchedule from "../../MySchedule/MySchedule";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

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
        path: "/mySchedule",
        element: <MySchedule></MySchedule>,
      },
    ],
  },
]);

export default router;
