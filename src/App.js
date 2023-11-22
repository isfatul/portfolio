import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CMD from "./cmd";
import "./App.css";
import NotFound from "./404";
// import '@mantine/core/styles.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CMD />} />
        <Route path="*" element={<NotFound />} /> // TODO: make a 404 page5 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
