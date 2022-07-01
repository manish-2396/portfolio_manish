import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import About from './Routes/About';
import Contect from './Routes/Contect';
import Home from './Routes/Home';
import Project from './Routes/Project';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/contact" element={<Contect/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
     
      
      
    </>
  );
}

export default App;
