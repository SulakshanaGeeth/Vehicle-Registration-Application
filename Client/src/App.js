import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import List from "./components/Register/List";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
