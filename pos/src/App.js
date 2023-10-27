// import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import "./App.css"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Login />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
