import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Cashier from './pages/Cashier';
import Order from './pages/Order';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/cashier" element={<Cashier />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
