// isLoggedInContext.js
import { createContext, useContext, useState, useEffect } from "react";

const isLoggedInContext = createContext(false);

export const IsLoggedInProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  // Optional: re-check token when component mounts
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  return (
    <isLoggedInContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </isLoggedInContext.Provider>
  );
};

export const useLoggedIn = () => {
  return useContext(isLoggedInContext);
};
