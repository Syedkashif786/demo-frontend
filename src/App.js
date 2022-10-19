// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from './Components/Signin';
import Header from "./Components/Header";
import Register from "./Components/Register";
import './App.css';
import FileManager from "./Components/Filemanager";
// import Home from "./Components/Home";
import Overview from "./Components/Overview";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route element={<Overview />} path="/" />
          <Route element={<Signin />} path="Signin" />
          <Route element={<Register></Register>} path="register" />
          <Route element={<FileManager />} path="manager" />
          {/* <Route element = {<Home />} path = "home" /> */}


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
