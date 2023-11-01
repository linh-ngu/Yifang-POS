import './index.css';
import { Login } from "./pages/Login";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
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
            </Routes>
          </div>
          {/* <Footer /> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
