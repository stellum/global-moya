import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
