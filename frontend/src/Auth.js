import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser !== null ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (value) => {
    setUser(value);
    sessionStorage.setItem("user", JSON.stringify(value));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
