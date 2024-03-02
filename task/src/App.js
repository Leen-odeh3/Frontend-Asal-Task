import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./Component/MainPage/MainPage";
import Details from "./Component/Details/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </Router>
  );
};

export default App;
