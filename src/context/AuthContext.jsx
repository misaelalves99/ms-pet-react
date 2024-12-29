import { createContext, useState, useContext } from "react";

// Criação do Contexto
const AuthContext = createContext();

// Provedor de Autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [myPets, setMyPets] = useState([]);

  const login = () => setIsAuthenticated(true);

  const logout = () => {
    setIsAuthenticated(false);
    setMyPets([]); // Limpa os pets ao deslogar
  };

  const addPetToMyPets = (pet) => {
    setMyPets((prevPets) => [...prevPets, pet]);
  };

  const deletePet = (id) => {
    setMyPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, myPets, addPetToMyPets, myPets, deletePet }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto
export const useAuth = () => useContext(AuthContext);
