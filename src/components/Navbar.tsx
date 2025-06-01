// src/components/Navbar.tsx

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styles from './Navbar.module.css';
import Logo from '../assets/Logo.png';
import './Navbar.module.css';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLinkItem}>
            Home
          </Link>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <Link to="/pet/my-pets" className={styles.navLinkItem}>
                Meus Pets
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className={styles.navLinkItem}>
                Sair
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className={styles.navLinkItem}>
                Entrar
              </Link>
            </li>
            <li>
              <Link to="/register" className={styles.navLinkItem}>
                Registrar
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
