import './index.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Cashier from './pages/Cashier';
import Order from './pages/Order';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className='page-wrap'>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/login" element={<Login />} />
              <Route path="/manager" element={<Manager />} />
              <Route path="/cashier" element={<Cashier />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
