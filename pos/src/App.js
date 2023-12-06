import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Cashier from './pages/Cashier';
import Order from './pages/Order';
import Redirect from './pages/Redirect';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from './contexts/ShopContextProvider';
import { UserContextProvider } from './contexts/UserContextProvider';
/**
 * @returns the home page with access to all the other interfaces as well 
 */
function App() {

  return (
    <div className='App'>
      <UserContextProvider>
        <ShopContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/login" element={<Login />} />
              <Route path="/manager" element={<Manager />} />
              <Route path="/cashier" element={<Cashier />} />
              <Route path="/order" element={<Order />} />
              <Route path="/redirect" element={<Redirect />} />
            </Routes>
          </BrowserRouter>
        </ShopContextProvider>
      </UserContextProvider>
      
    </div>
  );
}

export default App;
