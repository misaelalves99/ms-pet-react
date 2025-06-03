// src/types/auth.ts

import { Pet } from './pet';

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  myPets: Pet[];
  addPetToMyPets: (pet: Pet) => void;
  deletePet: (id: number) => void;
  updatePet: (id: number, updatedPet: Pet) => void;
}
