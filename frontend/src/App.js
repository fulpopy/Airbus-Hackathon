import React from "react";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Admin from "./Components/Admin/Admin";
import PrivateRoutes from "./Components/PrivateRoutes";
import { AuthProvider } from "./Auth";
import Analytics from "./Analytics/Analytics";
import Profile from "./Components/Profile";
import AirlinesDashboard from "./pages/dashboard/AirlinesDashboard";
import PartInfo from "./pages/dashboard/PartInfo.jsx";
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="analytics" element={<Analytics />} />
          </Route>
          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="dashboard" element={<AirlinesDashboard />}></Route>
          </Route>
          {/* <Route path="/dashboard" element={<AirlinesDashboard />}></Route> */}
          <Route path="/partInfo" element={<PartInfo />}></Route>
          {/* <Route path="analytics" element={<Analytics />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
