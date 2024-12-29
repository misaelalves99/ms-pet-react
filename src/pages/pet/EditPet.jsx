import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./EditPet.module.css";

function EditPet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { myPets, updatePet } = useAuth();

  const [petDetails, setPetDetails] = useState({
    name: "",
    category: "",
    weight: "",
    image: "",
  });

  useEffect(() => {
    const pet = myPets.find((pet) => pet.id === id);
    if (pet) {
      setPetDetails(pet);
    } else {
      navigate("/meus-pets"); // Redirect if pet not found
    }
  }, [id, myPets, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePet(id, petDetails); // Call the update function from context
    navigate("/meus-pets");
  };

  return (
    <div className={styles.editPetContainer}>
      <h1 className={styles.title}>Editar Pet</h1>
      <form onSubmit={handleSubmit} className={styles.editForm}>
        <label className={styles.formLabel}>
          Nome:
          <input
            type="text"
            name="name"
            value={petDetails.name}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          Categoria:
          <select
            name="category"
            value={petDetails.category}
            onChange={handleInputChange}
            className={styles.formInput}
          >
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </select>
        </label>
        <label className={styles.formLabel}>
          Peso:
          <input
            type="text"
            name="weight"
            value={petDetails.weight}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          URL da Imagem:
          <input
            type="text"
            name="image"
            value={petDetails.image}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </label>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.saveButton}>
            Salvar
          </button>
          <button
            type="button"
            onClick={() => navigate("/meus-pets")}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPet;
