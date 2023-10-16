import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Hero from './Hero'
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/hero" element={<Hero/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;