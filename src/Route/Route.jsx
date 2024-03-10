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
        element: <Prodects></Prodects>
      },
      {
        path: "detailsproduct/:id",
        element: <Detailsproduct></Detailsproduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "",
        element: <AddProdect></AddProdect>
      },
      {
        path: "allprodect",
        element: <AllProdect></AllProdect>
      }
    ]

  }
]);
export default router;