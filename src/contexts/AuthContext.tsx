import React, { createContext, useContext, useState, useCallback } from "react";
import { authService, type AuthUser } from "@/services/auth";

//? Intefaz del gestor de estado
interface AuthContextValue { //*Tiene un estado de usuario (posible null), un booleano para indicar si el usuario está autenticado.
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined); //* Genera o crea el gestor de estado

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<AuthUser | null>(
    authService.getStoredUser()
  );

  const login = useCallback(async (email: string, password: string) => {
    const { user: u } = await authService.login(email, password); //*Realiza una petición a la api
    setUser(u);
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
  }, []);

  const isAuthenticated = authService.isAuthenticated();

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );

}

export function useAuth() { //* Aquí utilizamos el gestor de estado, generado con el AuthProvider
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
