
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../global/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAutenticado } = useAuth();
  const location = useLocation();

  if (!isAutenticado()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;