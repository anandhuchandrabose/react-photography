import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './test/comingsoon';
import LinkTree from './LinkTree/LinkTree';
import Deheedeham from './LinkTree/Deheedeham';


function App() {
  return (
    <Router>
      <Routes>
        {/* COMING SOON */}
        <Route path="/" element={<ComingSoon />} />
        <Route path="/contact" element={<LinkTree/>} />
        <Route path="/deheedeham" element={<Deheedeham/>} />
      </Routes>
    </Router>
  );
}

export default App;
