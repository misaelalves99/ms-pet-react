// src/pages/pet/pet-details/index.tsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { pets } from '../../../api/pets';
import styles from './PetDetails.module.css';
import { useAuth } from '../../../hooks/useAuth';
import { Pet } from '../../../types/pet';

const PetDetailsPage = () => {
  const { id } = useParams();
  const petId = Number(id);
  const navigate = useNavigate();
  const { addPetToMyPets } = useAuth();

  const [foundPet, setFoundPet] = useState<Pet | undefined>(undefined);

  useEffect(() => {
    const pet = pets.find((p) => p.id === petId);
    setFoundPet(pet);
  }, [petId]);

  if (!foundPet) {
    return (
      <div className={styles.notFound}>
        Pet não encontrado. <Link to="/">Voltar à página inicial</Link>
      </div>
    );
  }

  const handleScheduleVisit = () => {
    addPetToMyPets(foundPet);
    navigate('/pet/my-pets');
  };

  return (
    <div className={styles.detailsContainer}>
      <img
        src={foundPet.image || '/placeholder.png'}
        alt={foundPet.name}
        width={300}
        height={300}
        className={styles.image}
      />
      <div className={styles.info}>
        <h1 className={styles.name}>{foundPet.name}</h1>
        <p className={styles.category}><strong>Categoria:</strong> {foundPet.category}</p>
        <p className={styles.weight}><strong>Peso:</strong> {foundPet.weight}</p>
        <p className={styles.description}><strong>Descrição:</strong> {foundPet.description}</p>

        <div className={styles.buttons}>
          <Link to="/" className={styles.backButton}>Voltar</Link>
          <button className={styles.visitationButton} onClick={handleScheduleVisit}>
            Agendar Visita
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;
