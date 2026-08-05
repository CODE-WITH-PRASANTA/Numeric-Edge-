import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Footer from "./components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";
import Bloggrids from "./Pages/Bloggrids/Bloggrids";
import Blogdetails from "./Pages/Blogdetails/Blogdetails";
import ContactUs from "./Pages/ContactUs/ContactUs";

  


const App = () => {
  return (
    <BrowserRouter>
    <Topbar/>
     <Navbar/>

      <Routes>
        <Route path="/bloggrids" element={<Bloggrids />} />
        <Route path="/blogdetails" element={<Blogdetails />} />
        <Route path="/contact" element={<ContactUs />} />



      
      </Routes>

     <Footer/>
    </BrowserRouter>
  );
};

export default App;