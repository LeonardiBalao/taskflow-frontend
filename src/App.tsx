import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutPage from "./pages/About";

const App: React.FC = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </Router>
);

export default App;