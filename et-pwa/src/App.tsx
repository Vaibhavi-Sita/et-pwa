import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const About = React.lazy(() => import('./About'));
const Home = React.lazy(() => import('./Home'));

const App: React.FC = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  </Router>
);
export default App;