import "../styles/Footer.css";
import home from "../assets/img/home.svg";
import whatsApp from "../assets/icons/whatsapp.svg";
import gitHub from "../assets/icons/github.svg";
import eMail from "../assets/icons/email.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedIn from "../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer>
      <div className="circle-white"></div>
      <img
        className="home"
        src={home}
        alt="botao home"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <div className="title">
        <h1>Contato</h1>
      </div>
      <div className="text">
        <h2>
          Ficaria feliz em discutir novas
          <br />
          oportunidades ou responder
          <br />
          suas perguntas.
        </h2>
      </div>
      <div className="redesSociais">
        <a
          href="https://wa.me/+5548988756333"
          target="_blank"
          className="whatsApp"
        >
          <img src={whatsApp} alt="WhatsApp" />
          <div>
            <h1>WhatsApp</h1>
          </div>
        </a>
        <a
          href="https://github.com/crow7077"
          target="_blank"
          className="GitHub"
        >
          <img src={gitHub} alt="GitHub" />
          <div>
            <h1>GitHub</h1>
          </div>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=renatonj0489@gmail.com&su=Contato%20via%20Portfólio&body=Olá%20Renato,"
          target="_blank"
          rel="noopener noreferrer"
          className="E-mail"
        >
          <img src={eMail} alt="E-mail" />
          <div>
            <h1>E-mail</h1>
          </div>
        </a>

        <a
          href="https://www.instagram.com/renatonjr/"
          target="_blank"
          className="Instagram"
        >
          <img src={instagram} alt="Instagram" />
          <div>
            <h1>Instagram</h1>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/renato-nunes-junior-3a371029b/"
          target="_blank"
          className="LinkedIn"
        >
          <img src={linkedIn} alt="LinkedIn" />
          <div>
            <h1>LinkedIn</h1>
          </div>
        </a>
      </div>
      <p className="direitosReservados">
        © {new Date().getFullYear()} Meu Portfólio. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
