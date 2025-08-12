// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useLoggedIn } from "../context/AuthContext";
const ProtectedRoute = ({ children }) => {
   // Or use context/auth provider
  //  const {isAuthenticated} = useLoggedIn()
  const isAuthenticated = true
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
