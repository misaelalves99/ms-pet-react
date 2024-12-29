import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Opcional, se você quiser autenticar automaticamente após o registro
import styles from "../pages/Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Opcional, para autenticar após o registro

  const handleRegister = (event) => {
    event.preventDefault();

    // Adicione aqui a lógica de registro, como enviar os dados para uma API ou salvar localmente.
    // Exemplo:
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());
    console.log("Dados do usuário:", userData);

    // Após o registro bem-sucedido, redirecione ou autentique o usuário
    // Redirecionar para a página de login
    navigate("/login");

    // OU autenticar automaticamente (caso faça sentido para a lógica do app)
    // login();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cadastre-se</h1>
        <p className={styles.subtitle}>faça o seu cadastro</p>
        <form className={styles.form} onSubmit={handleRegister}>
          <fieldset className={styles.fieldset}>
            <legend>Dados Pessoais</legend>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" placeholder="digite seu nome" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                placeholder="digite seu sobrenome"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input type="date" id="dataNascimento" name="dataNascimento" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" placeholder="___ ___.___-__" />
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
                name="email"
                placeholder="seunome@email.com"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="telefone" name="telefone" placeholder="( ) _____-____" />
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>Localização</legend>
            <div className={styles.inputGroup}>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" name="cep" placeholder="_____-___" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="estado">Estado</label>
              <select id="estado" name="estado">
                <option>Selecione o estado</option>
                <option>Minas Gerais</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cidade">Cidade</label>
              <select id="cidade" name="cidade">
                <option>Selecione a cidade</option>
                <option>Teófilo Otoni</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" name="bairro" placeholder="digite seu bairro" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="endereco">Endereço</label>
              <input type="text" id="endereco" name="endereco" placeholder="digite seu endereço" />
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
