import { Link } from "react-router-dom";
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

function PetList( { selectedCategory, searchTerm } ) {
    const pets = [
      { id: 1, name: "Luck", weight: "5kg", image: dog1, category: "Cachorro"},
      { id: 2, name: "Bob", weight: "5kg", image: dog2, category: "Cachorro"},
      { id: 3, name: "Mia", weight: "5kg", image: cat1, category: "Gato"},
      { id: 4, name: "Thor", weight: "5kg", image: cat2, category: "Gato"},
      { id: 5, name: "Bella", weight: "5kg", image: cat3, category: "Gato"},
      { id: 6, name: "Max", weight: "5kg", image: dog3, category: "Cachorro"},
      { id: 7, name: "Luna", weight: "5kg", image: dog4, category: "Cachorro"},
      { id: 8, name: "Simba", weight: "5kg", image: cat4, category: "Gato"},
      { id: 9, name: "Mel", weight: "5kg", image: dog5, category: "Cachorro"},
      { id: 10, name: "Bob", weight: "5kg", image: dog6, category: "Cachorro"},
      { id: 11, name: "Zeus", weight: "5kg", image: cat5, category: "Gato"},
      { id: 12, name: "Lola", weight: "5kg", image: cat6, category: "Gato"},
      { id: 13, name: "Nina", weight: "5kg", image: dog7, category: "Cachorro"},
      { id: 14, name: "Charlie", weight: "5kg", image: dog8, category: "Cachorro"},
      { id: 15, name: "Apollo", weight: "5kg", image: dog9, category: "Cachorro"},
      { id: 16, name: "Amora", weight: "5kg", image: cat7, category: "Gato"},
      { id: 17, name: "Fred", weight: "5kg", image: cat8, category: "Gato"},
      { id: 18, name: "Maia", weight: "5kg", image: cat9, category: "Gato"},
      { id: 19, name: "Toby", weight: "5kg", image: dog10, category: "Cachorro"},
      { id: 20, name: "Rex", weight: "5kg", image: dog11, category: "Cachorro"},
      { id: 21, name: "Julie", weight: "5kg", image: cat10, category: "Gato"},
      { id: 22, name: "Zoe", weight: "5kg", image: cat11, category: "Gato"},
      { id: 23, name: "Maggie", weight: "5kg", image: cat12, category: "Gato"},
      { id: 24, name: "Spike", weight: "5kg", image: dog12, category: "Cachorro"},
      { id: 25, name: "Oliver", weight: "5kg", image: dog13, category: "Cachorro"},
      { id: 26, name: "Princesa", weight: "5kg", image: dog14, category: "Cachorro"},
      { id: 27, name: "Lili", weight: "5kg", image: cat13, category: "Gato"},
      { id: 28, name: "Safira", weight: "5kg", image: cat14, category: "Gato"},
      { id: 29, name: "Marley", weight: "5kg", image: dog15, category: "Cachorro"},
      { id: 30, name: "Pandora", weight: "5kg", image: dog16, category: "Cachorro"},
      { id: 31, name: "Bento", weight: "5kg", image: dog17, category: "Cachorro"},
      { id: 32, name: "Chico", weight: "5kg", image: cat15, category: "Gato"},
      { id: 33, name: "Dora", weight: "5kg", image: cat16, category: "Gato"},
      { id: 34, name: "Pérola", weight: "5kg", image: cat17, category: "Gato"},
      { id: 35, name: "Bolt", weight: "5kg", image: dog18, category: "Cachorro"},
      { id: 36, name: "Duke", weight: "5kg", image: dog19, category: "Cachorro"},
      { id: 37, name: "Flor", weight: "5kg", image: dog20, category: "Cachorro"},
      { id: 38, name: "Mila", weight: "5kg", image: cat18, category: "Gato"},
      { id: 39, name: "Suki", weight: "5kg", image: cat19, category: "Gato"},
      { id: 40, name: "Jack", weight: "5kg", image: cat20, category: "Gato"},
    ];

    // // Filtrar pets com base na categoria
    // const filteredPets =
    // selectedCategory === "Todos"
    //   ? pets
    //   : pets.filter((pet) => pet.category === selectedCategory);

    // Filtrar pets com base na categoria e no termo de pesquisa
    const filteredPets = pets.filter(
      (pet) =>
        (selectedCategory === "Todos" || pet.category === selectedCategory) &&
        pet.name.toLowerCase().includes(searchTerm)
    );
  
    return (
      <div className={styles.petList}>
        {filteredPets.map((pet) => (
          <div key={pet.id} className={styles.card}>
            <img src={pet.image} alt={pet.name} className={styles.image} />
            <h3 className={styles.name}>{pet.name}</h3>
            <p className={styles.weight}>
              <strong>Peso:</strong> {pet.weight}
            </p>
            <button className={styles.button}>
              <Link to={`/pet/${pet.id}`} className={styles.button}>
                Mais detalhes
              </Link>
            </button>
          </div>
        ))}
      </div>
    );
  }
  
export default PetList;
  
