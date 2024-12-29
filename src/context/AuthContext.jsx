import { createContext, useState, useContext } from "react";

// Criação do Contexto
const AuthContext = createContext();

// Provedor de Autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto
export const useAuth = () => useContext(AuthContext);
