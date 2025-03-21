import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API_BASE_URL = "https://apple-store-4.onrender.com"; // ✅ Updated Backend URL

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/me`, { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, { email, password }, { withCredentials: true });

      setUser(res.data.user);
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.msg || "Login failed");
    }
  };

  const signup = async (name, email, password) => {
    try {
      await axios.post(`${API_BASE_URL}/signup`, { name, email, password }, { withCredentials: true });
      return await login(email, password);
    } catch (error) {
      throw new Error(error.response?.data?.msg || "Signup failed");
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error("❌ Logout Error:", error.message);
    }
  };

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>;
};
