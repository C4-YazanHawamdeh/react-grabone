import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FloatingLabel,
  Modal,
} from "react-bootstrap";

import Navigation from './component/Navigation';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>

      <Routes>
      <Route path="/home" element={<Home />} />
      </Routes>
      <div style={{backgroundColor:'white'}}>
      <div className='container-fluid col-11'>
      <Footer/></div></div>
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
    </div>
  );
}

export default App;
