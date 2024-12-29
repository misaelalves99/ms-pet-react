import { useState } from "react";
import PetList from "../components/PetList";
import styles from "./Home.module.css";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>ADOTE UM</h1>
          <p className={styles.heroSubtitle}>PET AMOROSO</p>
        </div>
      </div>

      {/* Header Section */}
      <div className={styles.header}>
        <h1>
          Adote um <span className={styles.highlight}>Pet</span>
        </h1>
        <p className={styles.headerSubtitle}>
          Veja os detalhes de cada um, conheça e escolha com amor
        </p>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar"
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className={styles.categoriesContainer}>
        <h2 className={styles.title}>Categorias</h2>
        <div className={styles.options}>
          <label>
            <input
              type="radio"
              name="category"
              value="Todos"
              checked={selectedCategory === "Todos"}
              onChange={handleCategoryChange}
            />{" "}
            Todos
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Cachorro"
              checked={selectedCategory === "Cachorro"}
              onChange={handleCategoryChange}
            />{" "}
            Cachorro
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Gato"
              checked={selectedCategory === "Gato"}
              onChange={handleCategoryChange}
            />{" "}
            Gato
          </label>
        </div>
      </div>

      {/* Pet List Section */}
      <PetList selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </>
  );
}

export default Home;
