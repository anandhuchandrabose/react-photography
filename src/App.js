import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/dist/home.css'
import './components/dist/style.css';
import Gallery from './components/pages/Gallery';
import Admin from './components/pages/admin/Admin';
import ImageGallery from './components/pages/admin/ImageGallery';
import Home from './components/pages/home';
import LinkTree from './LinkTree/LinkTree';
import Travel from './components/pages/Travel';
import LifeOnStreets from './components/pages/LifeOnStreets';
import Commercial from './components/pages/Commercial';
import FineArt from './components/pages/FineArt';
import Deheedeham from './LinkTree/Deheedeham';
import ComingSoon from './test/comingsoon';
import Kids from './components/pages/Kids';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/gallery" element={<Splash />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/home/ragooty" element={<ComingSoon />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/image" element={<ImageGallery />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/contact" element={<LinkTree />} />
        <Route path='/Travel' element={<Travel />}></Route>
        <Route path='/LifeOnStreets' element={<LifeOnStreets />}></Route>
        <Route path='/Commercial' element={<Commercial />}></Route>
        <Route path='/FineArt' element={<FineArt />}></Route>
        <Route path='/Kids' element={<Kids />}></Route>
        <Route path="/deheedeham" element={<Deheedeham />} />

      </Routes>
    </Router>
  );
}

export default App;