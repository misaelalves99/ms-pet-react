import { Link } from "react-router-dom";
import styles from "../pages/Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <p className={styles.subtitle}>faça o seu cadastro</p>
        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <legend>Dados Pessoais</legend>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" placeholder="digite seu nome" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                type="text"
                id="sobrenome"
                placeholder="digite seu sobrenome"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input type="date" id="dataNascimento" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" placeholder="___ ___.___-__" />
            </div>
            <div className={styles.genderGroup}>
              <label>Gênero</label>
              <label>
                <input type="radio" name="genero" value="masculino" />
                Masculino
              </label>
              <label>
                <input type="radio" name="genero" value="feminino" />
                Feminino
              </label>
              <label>
                <input type="radio" name="genero" value="outro" />
                Outro
              </label>
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>Contato</legend>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="seunome@email.com"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="telefone" placeholder="( ) _____-____" />
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>Localização</legend>
            <div className={styles.inputGroup}>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" placeholder="_____-___" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="estado">Estado</label>
              <select id="estado">
                <option>Selecione o estado</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cidade">Cidade</label>
              <select id="cidade">
                <option>Selecione a cidade</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" placeholder="digite seu bairro" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="endereco">Endereço</label>
              <input type="text" id="endereco" placeholder="digite seu endereço" />
            </div>
          </fieldset>

          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>
        <p className={styles.footer}>
          Já tem uma conta? <Link to="login" className={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
