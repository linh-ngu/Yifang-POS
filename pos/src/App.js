// import logo from './logo.svg';
import './App.css';
import { Login } from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login />} />
            </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
