// src/context/AuthProvider.tsx

import { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { Pet } from '../types/pet';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [myPets, setMyPets] = useState<Pet[]>([]);

  useEffect(() => {
    const storedPets = localStorage.getItem('myPets');
    if (storedPets) {
      try {
        const parsed = JSON.parse(storedPets);
        if (Array.isArray(parsed)) {
          setMyPets(parsed);
        }
      } catch (err) {
        console.error('Erro ao ler myPets do localStorage:', err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myPets', JSON.stringify(myPets));
  }, [myPets]);

  const login = () => setIsAuthenticated(true);

  const logout = () => {
    setIsAuthenticated(false);
    setMyPets([]);
    localStorage.removeItem('myPets');
  };

  const addPetToMyPets = (pet: Pet) => {
    setMyPets((prevPets) => {
      const exists = prevPets.some((p) => p.id === pet.id);
      return exists ? prevPets : [...prevPets, pet];
    });
  };

  const deletePet = (id: number) => {
    setMyPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };

  const updatePet = (id: number, updatedPet: Pet) => {
    setMyPets((prevPets) =>
      prevPets.map((pet) => (pet.id === id ? updatedPet : pet))
    );
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, myPets, addPetToMyPets, deletePet, updatePet }}
    >
      {children}
    </AuthContext.Provider>
  );
};
