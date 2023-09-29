"use client";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("");

  useEffect(() => {
    const handleStorageChange = () => {
      setIsUserLoggedIn(localStorage.getItem("isLoggedIn"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    window.dispatchEvent(new Event("storage"));
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
