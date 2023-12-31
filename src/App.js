import{createBrowserRouter, RouterProvider,createRoutesFromElements ,Route} from 'react-router-dom';
import './App.css';
import DashLayout from './components/Dashboard/DashLayout';
import Slideshow from './components/Dashboard/Slideshow';
import DashProperties from './components/Dashboard/DashProperties';
import DashLogin from './components/Dashboard/DashLogin';

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';

import Properties from './pages/Properties';
import RootLayout from './components/RootLayout';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './components/Dashboard/User';
import LoginSection from './components/LoginSection';
import { QueryClientProvider} from '@tanstack/react-query';
import { queryClient } from './util/http';
import Reserve from './components/reserve';


function App() {




  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
        {path:'/',element:<Home />},
        {path:'/properties',element:<Properties />},
        {path:'/contactus' , element: <Contactus />},
        {path:'/login' , element: <Login />},
        {path:'/register' , element: <Register />},
        {path:'/reserve' , element: <Reserve />},
      ]
    },
    {
      path:'/dashboard',
      element:<DashLayout />,
      children : [
        {path:'',element:<h2>welcome to dashboard</h2>},
        {path:'slideshow',element:<Slideshow />,

      },

      
        {path:'properties',element:<DashProperties />},
        {path:'user',element:<User />},
        {path:'login',
        element:<LoginSection />
      },
        
      ]
    }
  ]);

  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
   
     
  );
}

export default App;
