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
        path: '/eventDetails/:event_id',
        loader: ({params})=>fetch(`http://localhost:3000/events/${params.event_id}`),
        element: <EventDetails></EventDetails>
      },
      { path: '/registrationCount/:count_id',
        loader:({params})=>fetch(`http://localhost:3000/registered/event/${params.count_id}`),
        element:<RegistrationCount></RegistrationCount>
      },
      {
        path: '/registerEvent/:id',
        loader: ({params})=>fetch(`http://localhost:3000/events/${params.id}`),
        element: <RegisterEvent></RegisterEvent>
      }
    ]
  },
]);