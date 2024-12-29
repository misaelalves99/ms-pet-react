import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./MyPets.module.css";

function MyPets() {
  const { myPets, deletePet } = useAuth();
  const navigate = useNavigate();

  if (myPets.length === 0) {
    return <div className={styles.empty}>Você ainda não adicionou nenhum pet!</div>;
  }

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este pet?")) {
      deletePet(id);
    }
  };

  return (
    <div className={styles.myPetsContainer}>
      <h1 className={styles.title}>Meus Pets</h1>
      <table className={styles.petTable}>
        <thead>
          <tr>
            <th>Pet</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {myPets.map((pet) => (
            <tr key={pet.id} className={styles.petRow}>
              <td className={styles.petDetails}>
                <img src={pet.image} alt={pet.name} className={styles.petImage} />
                <div className={styles.petInfo}>
                  <h2 className={styles.petName}>{pet.name}</h2>
                  <p>
                    <strong>Categoria:</strong> {pet.category}
                  </p>
                  <p>
                    <strong>Peso:</strong> {pet.weight}
                  </p>
                </div>
              </td>
              <td className={styles.actionButtons}>
                <button
                  className={styles.editButton}
                  onClick={() => navigate(`/editar-pet/${pet.id}`)}
                >
                  Editar
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(pet.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyPets;
