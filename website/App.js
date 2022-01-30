import React from 'react';
import {Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Components/style.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  return(
  <>
    <Header/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="services" element={<Services/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
  </>
  )
}

export default App;