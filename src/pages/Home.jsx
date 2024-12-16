import PetList from '../components/PetList';
import styles from './Home.module.css';
import { FaSearch } from "react-icons/fa";

function Home() {
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
          />
          <button className={styles.searchButton}><FaSearch /></button>
        </div>
      </div>

      {/* Categories Section */}
      <div className={styles.categoriesContainer}>
        <h2 className={styles.title}>Categorias</h2>
        <div className={styles.options}>
          <label>
            <input type="radio" name="category" defaultChecked /> Todos
          </label>
          <label>
            <input type="radio" name="category" /> Cachorro
          </label>
          <label>
            <input type="radio" name="category" /> Gato
          </label>
        </div>
      </div>

      {/* Pet List Section */}
      <PetList />
    </>
  );
}

export default Home;
