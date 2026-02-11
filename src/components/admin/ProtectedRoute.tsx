import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {

  const { isAuthenticated } = useAuth();

  // TODO: ACTIVAR PROTECCIÓN DE RUTAS
  if (!isAuthenticated) { //? Si no esta autenticado, redirige al login
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;

}
