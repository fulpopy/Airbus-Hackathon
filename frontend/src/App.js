import React from "react";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin/Admin";
import AirlinesDashboard from "./pages/dashboard/AirlinesDashboard";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/dashboard" element={<AirlinesDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
