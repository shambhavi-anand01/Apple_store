import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://apple-store-4.onrender.com/me", { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  const login = async (email, password) => {
    const res = await axios.post("https://apple-store-4.onrender.com/login", { email, password }, { withCredentials: true });
    setUser(res.data.user);
  };

  const signup = async (name, email, password) => {
    await axios.post("https://apple-store-4.onrender.com/signup", { name, email, password });
  };

  const logout = async () => {
    await axios.post("https://apple-store-4.onrender.com/logout", { withCredentials: true });
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>;
};
