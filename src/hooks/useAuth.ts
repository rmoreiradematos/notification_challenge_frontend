import { useState, useEffect } from "react";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthState({
        isAuthenticated: true,
        token: token,
      });
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setAuthState({
      isAuthenticated: true,
      token: token,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthState({
      isAuthenticated: false,
      token: null,
    });
  };

  return { ...authState, login, logout };
}
