// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const isAuthenticated = !!localStorage.getItem("token"); // Or use context/auth provider
  const isAuthenticated = false;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
