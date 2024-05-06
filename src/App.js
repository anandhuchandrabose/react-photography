import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/dist/home.css'
import './components/dist/style.css';
// import Splash from './components/pages/Splash';
import Gallery from './components/pages/Gallery';
import Admin from './components/pages/admin/Admin';
import ImageGallery from './components/pages/admin/ImageGallery';
import Home from './components/pages/home';
import LinkTree from './LinkTree/LinkTree';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/gallery" element={<Splash />} /> */}
        <Route path="/" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/image" element={<ImageGallery />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<LinkTree />} />
      </Routes>
    </Router>
  );
}

export default App;
