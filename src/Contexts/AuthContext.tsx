import React, { createContext, useState } from 'react';
import { API_KEY_DEFAULT } from "../Services/api";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [apiKey, setApiKey] = useState("API_KEY_DEFAULT");

  function saveApiKey(key) {
    setApiKey(key);
  }

  function login(email, password) {
    
    setUser({
      name: "William",
      email: email,
      password: password
    });
  }

  function register(name, email, password) {
    
    setUser({
      name: name,
      email: email,
      password: password
    });
  }

  function logout() {
    setUser(null);
  }


  return (
    <AuthContext.Provider value={{ user, login, logout, register, apiKey, saveApiKey }}>
      {children}
    </AuthContext.Provider>
  );
}
