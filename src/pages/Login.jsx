import { Link } from "react-router-dom";
import styles from "../pages/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>faça seu login</p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="seunome@email.com"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="digite sua senha"
              className={styles.input}
            />
          </div>
          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              Manter-me conectado
            </label>
            <a href="#" className={styles.link}>
              Esqueceu a Senha?
            </a>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <p className={styles.footer}>
          Não tem uma conta? <Link to="register" className={styles.link}>Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
