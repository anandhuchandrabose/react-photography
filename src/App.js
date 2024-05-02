import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './test/comingsoon';


function App() {
  return (
    <Router>
      <Routes>
        {/* COMING SOON */}
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
