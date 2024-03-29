import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Page/Home/Home";
import Contect from "../Pages/Page/Contect/Contect";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Prodects from "../Pages/Page/AllProdects/Prodects";
import Dashboard from "../Dashboard/Dashboard";
import AddProdect from "../Dashboard/pages/AddProdect/AddProdect";
import Detailsproduct from "../Pages/Page/DetailsProduct/Detailsproduct";
import AllProdect from "../Dashboard/pages/AllProdect/AllProdect";
import AddToCart from "../Pages/Page/AddToCart/AddToCart";
import DashboardChart from "../Dashboard/pages/DashboardChart/DashboardChart";
import AllUser from "../Dashboard/pages/AllUser/AllUser";
import User from "../Dashboard/pages/User/User";
import PerchesProduct from "../Dashboard/pages/PerchesProduct/PerchesProduct";
import PrivateRoute from "./PrivateRoute";
import PaymentPage from "../Dashboard/UserPayment/PatmentPage/PaymentPage";

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
        path: "contect",
        element: <Contect></Contect>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "addtocart",
        element: <AddToCart></AddToCart>
      },
      {
        path: "prodects",
        element: <PrivateRoute><Prodects></Prodects></PrivateRoute>
      },
      {
        path: "userpayment",
        element: <PaymentPage></PaymentPage>
      },
      {
        path: "detailsproduct/:id",
        element: <Detailsproduct></Detailsproduct>,
        loader: ({ params }) => fetch(`https://tea-coffee-server.vercel.app/product/${params.id}`)
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:"",
        element: <DashboardChart></DashboardChart>
      },
      {
        path: "addproduct",
        element: <AddProdect></AddProdect>
      },
      {
        path: "allprodect",
        element: <AllProdect></AllProdect>
      },
      {
        path: "alluser",
        element: <AllUser></AllUser>
      },
      {
        path: "user",
        element: <User></User>
      },
      {
        path: "perchesproduct",
        element: <PerchesProduct></PerchesProduct>
      },
      
    ]

  }
]);
export default router;