import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
const About = lazy(() => import('./components/pages/About'));
const Home = lazy(() => import('./components/pages/Home') );
const Payment = lazy(() => import('./components/pages/Payment') );
const Services = lazy(() => import('./components/pages/Services') );

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </Suspense>
  </Router>
);


export default App;