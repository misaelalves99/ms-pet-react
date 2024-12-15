import { Link } from 'react-router-dom';
// import { Logo } from '../assets/Logo.png';

function Navbar() {
  return (
    <div>
      <img src="../assets/Logo.png" alt="Logo" />
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Entrar</Link></li>
          <li><Link to="/register">Registrar</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

