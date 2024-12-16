import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <p className={styles.loginTitle}>Login</p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Nome</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Sobrenome</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input type="email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Senha</label>
          <input type="password" className={styles.input} />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
