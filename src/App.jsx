import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/pages/HomePage';
import Login from './Components/pages/Login';
import Bg from './Components/pages/Bg';
import SingUp from './Components/pages/SingUp';
import ForgotPassword from './Components/pages/ForgotPassword';
import Dashboard from './Components/pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bg" element={<Bg />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
