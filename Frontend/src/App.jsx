import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Footer from "./components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";

  


const App = () => {
  return (
    <BrowserRouter>
    <Topbar/>
     <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>

     <Footer/>
    </BrowserRouter>
  );
};

export default App;