import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/dist/style.css';
import Splash from './components/pages/Splash';
import Gallery from './components/pages/Gallery';
import Admin from './components/pages/admin/Admin';
import ImageGallery from './components/pages/admin/ImageGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/image" element={<ImageGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
