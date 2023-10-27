import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/about" element={<h1>About</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
