import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import RegisterView from './views/Register/RegisterView';
import LoginView from './views/Login/LoginView';
import DashboardView from './views/Dashboard/DashboardView';
import HomeView from './views/Home/HomeView';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
          <Route path="/" element={<HomeView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/dashboard" element={<DashboardView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;