import { useAuth } from "../context/AuthContext";
import styles from "../pages/Login.module.css";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica de autenticação, como verificar o email e a senha.
    login(); // Atualiza o estado de autenticação.
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>faça seu login</p>
        <form className={styles.form} onSubmit={handleLogin}>
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
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
