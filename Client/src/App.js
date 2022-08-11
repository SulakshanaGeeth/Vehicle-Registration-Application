import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import List from "./components/Register/List";
import UpdateRegistration from "./components/Register/UpdateRegister";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/list" element={<List />} />
        <Route path="/update/:id" element={<UpdateRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}
