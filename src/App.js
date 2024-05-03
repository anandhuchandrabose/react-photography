import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ComingSoon from './test/comingsoon';
import LinkTree from './LinkTree/LinkTree';


function App() {
  return (
    <Router>
      <Routes>
        {/* COMING SOON */}
        <Route path="/" element={<LinkTree />} />
      </Routes>
    </Router>
  );
}

export default App;
