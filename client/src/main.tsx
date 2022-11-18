import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import RegisterView from './views/Register/RegisterView';
import LoginView from './views/Login/LoginView';
import DashboardView from './views/Dashboard/DashboardView';
import HomeView from './views/Home/HomeView';
import Navbar from './components/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/dashboard" element={<DashboardView />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
