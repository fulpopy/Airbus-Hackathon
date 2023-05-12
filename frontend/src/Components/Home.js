import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";
function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Home;
