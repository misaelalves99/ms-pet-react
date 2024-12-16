import styles from './Register.module.css';

function Register() {
  return (
    <div className={styles.registerContainer}>
      <p className={styles.registerTitle}>Register</p>
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
          <button className={styles.button} type="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
