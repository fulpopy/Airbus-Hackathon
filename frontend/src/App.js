import React from "react";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin/Admin";
import PrivateRoutes from "./Components/PrivateRoutes";
import { AuthProvider } from "./Auth";
import Analytics from "./Analytics/Analytics";
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
