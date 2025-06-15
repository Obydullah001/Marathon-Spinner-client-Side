import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Marathon from "../Pages/Marathon";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashBoard from "../Pages/DashBoard";
import MarathonForm from "../Components/MarathonForm";
import EventDetails from "../Components/EventDetails";
import MyMarathon from "../Components/Mymarathon";
import RegisterEvent from "../Components/RegisterEvent";



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
        loader: ()=>fetch('http://localhost:3000/events'),
        element: <Marathon></Marathon>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>
      },
      {
        path:'/addmarathon',
        element:<MarathonForm></MarathonForm>
      },
      {
        path:'/myMarathon',
        
        element: <MyMarathon></MyMarathon>
      },
      {
        path: '/eventDetails/:id',
        loader: ({params})=>fetch(`http://localhost:3000/events/${params.id}`),
        element: <EventDetails></EventDetails>
      },
      {
        path: '/registerEvent/:id',
        loader: ({params})=>fetch(`http://localhost:3000/events/${params.id}`),
        element: <RegisterEvent></RegisterEvent>
      }
    ]
  },
]);