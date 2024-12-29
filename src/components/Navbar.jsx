import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Navbar.module.css";
import Logo from "../assets/Logo.png";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>

      {/* Links de Navegação */}
      <div>
        <ul className={styles.navLinks}>
          {/* Home sempre visível */}
          <li>
            <Link to="/" className={styles.navLinkItem}>
              Home
            </Link>
          </li>

          {/* Links condicionais */}
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/meus-pets" className={styles.navLinkItem}>
                  Meus Pets
                </Link>
              </li>
              <li>
                <button onClick={logout} className={styles.navLinkItem}>
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
      </div>
      <ul className={styles.navLinks}>
        {/* Home sempre visível */}
        <li>
          <Link to="/" className={styles.navLinkItem}>
            Home
          </Link>
        </li>

        {/* Links condicionais */}
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/meus-pets" className={styles.navLinkItem}>
                Meus Pets
              </Link>
            </li>
            <li>
              <button onClick={logout} className={styles.navLinkItem}>
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
    </div>
  );
}

export default Navbar;
