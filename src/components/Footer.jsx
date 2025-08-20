import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <img src="home" alt="botao" />
      <p>
        © {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
      </p>
    </footer>
  );
}
