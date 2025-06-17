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
import RegistrationCount from "../Components/RegistrationCount";
import PrivateRoute from "../Private/PrivateRoute";
import DashBoardLayout from "../MainLayout/DashBoardLayout";
import MyApply from "../Components/MyApply";



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
        element: <PrivateRoute><Marathon></Marathon></PrivateRoute>
      },
      {
      path:'eventDetails/:id',
      element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>
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
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
      },
      
      
      {
        path: '/eventDetails/:event_id',
        loader: ({params})=>fetch(`http://localhost:3000/events/${params.event_id}`),
        element: <EventDetails></EventDetails>
      },
     
      {
        path: '/registerEvent/:id',
        loader: ({params})=>fetch(`http://localhost:3000/events/${params.id}`),
        element: <RegisterEvent></RegisterEvent>
      }
    ]
  },
  {
    path: '/dashboardLayout',
    element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    children:[
      {
        path: 'addmarathonForm',
        element: <MarathonForm></MarathonForm>
      },
      {
        path: 'mymarathon',
        element: <MyMarathon></MyMarathon>
      },
      {
        path:'myapply',
        element: <MyApply></MyApply>
      }
    ]
  }
]);