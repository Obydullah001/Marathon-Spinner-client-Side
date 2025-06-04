import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Marathon from "../Pages/Marathon";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/marathon",
        element: <Marathon></Marathon>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);