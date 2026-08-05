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
import Education from "./Components/Education/Education";
import BookDetails from "./Components/BookDetails/BookDetails";
import OurTeam from "./Components/OurTeam/OurTeam";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import AboutUs from "./Pages/A/AboutUs/AboutUs";

  


const App = () => {
  return (
    <BrowserRouter>
    <Topbar/>
     <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>}/>
         <Route path="/Education" element={<Education/>} />
         <Route path="/BookDetails" element={<BookDetails/>} />
         <Route path="/OurTeam" element={<OurTeam/>} />
         <Route path="/TeamDetails" element={<TeamDetails/>} />

         <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>

     <Footer/>
    </BrowserRouter>
  );
};

export default App;