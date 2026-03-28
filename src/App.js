import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/App.css";

/**
 * Main App component - handles routing
 * Optimized and restructured for better organization
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
