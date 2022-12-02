import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import RegisterView from "./views/Register/RegisterView";
import LoginView from "./views/Login/LoginView";
import DashboardView from "./views/Dashboard/DashboardView";
import HomeView from "./views/Home/HomeView";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/signup" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/dashboard/users" element={<DashboardView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;