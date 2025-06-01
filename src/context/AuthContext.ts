// src/context/AuthContext.ts

import { createContext } from 'react';
import { Pet } from '../types/pet';

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  myPets: Pet[];
  addPetToMyPets: (pet: Pet) => void;
  deletePet: (id: number) => void;
  updatePet: (id: number, updatedPet: Pet) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
