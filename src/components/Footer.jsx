import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 <Link to="/">MS Pet</Link>. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
