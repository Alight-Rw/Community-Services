
import { isAuthenticated } from "../Utils/authUtils";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};


const ProtectedProviderRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/provider-login" replace />;
};

export { ProtectedRoute, ProtectedProviderRoute };