// src/App.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import PetDetails from "./pages/pet/pet-details";
import EditPet from "./pages/pet/edit-pet";
import MyPets from "./pages/pet/my-pets";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { AuthProvider } from "./context/AuthProvider";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pet/my-pets" element={<MyPets />} />
            <Route path="/pet/edit-pet" element={<EditPet />} />
            <Route path="/pet/:id" element={<PetDetails />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
