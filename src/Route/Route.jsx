import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Page/Home/Home";
import Contect from "../Pages/Page/Contect/Contect";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path:"contect",
            element:<Contect></Contect>
        },
        {
            path:"signup",
            element:<SignUp></SignUp>
        },
        {
          path:"login",
          element:<Login></Login>
        }
      ],
    },
  ]);
  export default router;