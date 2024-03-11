import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './components/dist/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Splash from './components/pages/Splash';
import Gallery from './components/pages/Gallery';
import Admin from './components/pages/admin/Admin';
import Image from './components/pages/admin/ImageGallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/Gallery',
    element: <Gallery />,
  },
  {
    path: '/Admin',
    element: <Admin />
  },
  {
    path: '/Image',
    element: <Image />
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
