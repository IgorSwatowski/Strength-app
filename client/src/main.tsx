import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserProfile from './views/UserProfile';
import RegisterView from './views/Register/RegisterView';
import LoginView from './views/Login/LoginView';
import DashboardView from './views/Dashboard/DashboardView';
import Navbar from './components/Navbar/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <UserProfile /> 
  },
  {
    path: "/register",
    element: <RegisterView />
  },
  {
    path: "/login",
    element: <LoginView />
  },
  {
    path: "/dashboard",
    element: <DashboardView />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
)
