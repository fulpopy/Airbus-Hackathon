import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../Auth";
function PrivateRoutes() {
  const {user} = useAuth();
  return user ? <Outlet/>:<Navigate to={"/"}/>;
}

export default PrivateRoutes;