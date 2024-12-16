import styles from "./PetList.module.css";
import dog1 from "../assets/pets/dog/dog-01.jpg";
import dog2 from "../assets/pets/dog/dog-02.jpg";
import dog3 from "../assets/pets/dog/dog-03.jpg";
import dog4 from "../assets/pets/dog/dog-04.jpg";
import dog5 from "../assets/pets/dog/dog-05.jpg";
import dog6 from "../assets/pets/dog/dog-06.jpg";
import dog7 from "../assets/pets/dog/dog-07.jpg";
import dog8 from "../assets/pets/dog/dog-08.jpg";
import dog9 from "../assets/pets/dog/dog-09.jpg";
import dog10 from "../assets/pets/dog/dog-10.jpg";
import dog11 from "../assets/pets/dog/dog-11.jpg";
import dog12 from "../assets/pets/dog/dog-12.jpg";
import dog13 from "../assets/pets/dog/dog-13.jpg";
import dog14 from "../assets/pets/dog/dog-14.jpg";
import dog15 from "../assets/pets/dog/dog-15.jpg";
import dog16 from "../assets/pets/dog/dog-16.jpg";
import dog17 from "../assets/pets/dog/dog-17.jpg";
import dog18 from "../assets/pets/dog/dog-18.jpg";
import dog19 from "../assets/pets/dog/dog-19.jpg";
import dog20 from "../assets/pets/dog/dog-20.jpg";

import cat1 from "../assets/pets/cat/cat-01.jpg";
import cat2 from "../assets/pets/cat/cat-02.jpg";
import cat3 from "../assets/pets/cat/cat-03.jpg";
import cat4 from "../assets/pets/cat/cat-04.jpg";
import cat5 from "../assets/pets/cat/cat-05.jpg";
import cat6 from "../assets/pets/cat/cat-06.jpg";
import cat7 from "../assets/pets/cat/cat-07.jpg";
import cat8 from "../assets/pets/cat/cat-08.jpg";
import cat9 from "../assets/pets/cat/cat-09.jpg";
import cat10 from "../assets/pets/cat/cat-10.jpg";
import cat11 from "../assets/pets/cat/cat-11.jpg";
import cat12 from "../assets/pets/cat/cat-12.jpg";
import cat13 from "../assets/pets/cat/cat-13.jpg";
import cat14 from "../assets/pets/cat/cat-14.jpg";
import cat15 from "../assets/pets/cat/cat-15.jpg";
import cat16 from "../assets/pets/cat/cat-16.jpg";
import cat17 from "../assets/pets/cat/cat-17.jpg";
import cat18 from "../assets/pets/cat/cat-18.jpg";
import cat19 from "../assets/pets/cat/cat-19.jpg";
import cat20 from "../assets/pets/cat/cat-20.jpg";

function PetList() {
    const pets = [
      { id: 1, name: "Luck", weight: "5kg", image: dog1},
      { id: 2, name: "Luck", weight: "5kg", image: dog2},
      { id: 3, name: "Luck", weight: "5kg", image: cat1},
      { id: 4, name: "Luck", weight: "5kg", image: cat2},
      { id: 5, name: "Luck", weight: "5kg", image: cat3},
      { id: 6, name: "Luck", weight: "5kg", image: dog3},
      { id: 7, name: "Luck", weight: "5kg", image: dog4},
      { id: 8, name: "Luck", weight: "5kg", image: cat4},
      { id: 9, name: "Luck", weight: "5kg", image: dog5},
      { id: 10, name: "Luck", weight: "5kg", image: dog6},
      { id: 11, name: "Luck", weight: "5kg", image: cat5},
      { id: 12, name: "Luck", weight: "5kg", image: cat6},
      { id: 13, name: "Luck", weight: "5kg", image: dog7},
      { id: 14, name: "Luck", weight: "5kg", image: dog8},
      { id: 15, name: "Luck", weight: "5kg", image: dog9},
      { id: 16, name: "Luck", weight: "5kg", image: cat7},
      { id: 17, name: "Luck", weight: "5kg", image: cat8},
      { id: 18, name: "Luck", weight: "5kg", image: cat9},
      { id: 19, name: "Luck", weight: "5kg", image: dog10},
      { id: 20, name: "Luck", weight: "5kg", image: dog11},
      { id: 21, name: "Luck", weight: "5kg", image: cat10},
      { id: 22, name: "Luck", weight: "5kg", image: cat11},
      { id: 23, name: "Luck", weight: "5kg", image: cat12},
      { id: 24, name: "Luck", weight: "5kg", image: dog12},
      { id: 25, name: "Luck", weight: "5kg", image: dog13},
      { id: 26, name: "Luck", weight: "5kg", image: dog14},
      { id: 27, name: "Luck", weight: "5kg", image: cat13},
      { id: 28, name: "Luck", weight: "5kg", image: cat14},
      { id: 29, name: "Luck", weight: "5kg", image: dog15},
      { id: 30, name: "Luck", weight: "5kg", image: dog16},
      { id: 31, name: "Luck", weight: "5kg", image: dog17},
      { id: 32, name: "Luck", weight: "5kg", image: cat15},
      { id: 33, name: "Luck", weight: "5kg", image: cat16},
      { id: 34, name: "Luck", weight: "5kg", image: cat17},
      { id: 35, name: "Luck", weight: "5kg", image: dog18},
      { id: 36, name: "Luck", weight: "5kg", image: dog19},
      { id: 37, name: "Luck", weight: "5kg", image: dog20},
      { id: 38, name: "Luck", weight: "5kg", image: cat18},
      { id: 39, name: "Luck", weight: "5kg", image: cat19},
      { id: 40, name: "Luck", weight: "5kg", image: cat20},
    ];
  
    return (
      <div className={styles.petList}>
        {pets.map((pet) => (
          <div key={pet.id} className={styles.card}>
            <img src={pet.image} alt={pet.name} className={styles.image} />
            <h3 className={styles.name}>{pet.name}</h3>
            <p className={styles.weight}>
              <strong>Peso:</strong> {pet.weight}
            </p>
            <button className={styles.button}>Mais detalhes</button>
          </div>
        ))}
      </div>
    );
  }
  
export default PetList;
  
