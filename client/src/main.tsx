import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import UserProfile from './UserProfile';
import RegisterView from './views/Register/RegisterView';
import LoginView from './views/Login/LoginView';

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
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
