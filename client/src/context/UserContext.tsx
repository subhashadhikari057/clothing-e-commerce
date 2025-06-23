"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

interface DecodedToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

interface User {
  id: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        if (decoded && decoded.exp * 1000 > Date.now()) {
          setUser({ id: decoded.id, role: decoded.role });
        } else {
          localStorage.removeItem("token");
        }
      } catch (err) {
        console.error("Token decoding failed:", err);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
