import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <img src="../assets/Logo.png" alt="Logo" className={styles.logo} />

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.navLinkItem}>Home</Link></li>
        <li><Link to="/login" className={styles.navLinkItem}>Entrar</Link></li>
        <li><Link to="/register" className={styles.navLinkItem}>Registrar</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
