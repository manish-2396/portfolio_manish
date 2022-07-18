import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import About from './Routes/About';
import Contect from './Routes/Contect';
import Home from './Routes/Home';
import Project from './Routes/Project';
import Admine from './Routes/Admine';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/contact" element={<Contect/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/admine" element={<Admine/>}  />
    </Routes>
     
      
      
    </>
  );
}
// npm i -g vercel@latest
export default App;
