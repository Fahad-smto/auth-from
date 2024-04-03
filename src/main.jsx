import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import SingIn from './Components/SingIn/SingIn.jsx';
import Registar from './Components/SingIn/Registar/Registar.jsx';
 import Root from './Components/Root/Root.jsx';
import HeroRegistar from './Components/HeroRegistar/HeroRegistar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path : '/',
        element:<Home></Home>
      },
      {
        path :'/log-in',
        element: <SingIn></SingIn>
      },
      {
        path:'/registar',
        element:<Registar></Registar>
      },
      {
        path :'/hero-registar',
        element:<HeroRegistar></HeroRegistar>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
