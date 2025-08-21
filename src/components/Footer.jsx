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
        <div className="whatsApp">
          <img src={whatsApp} alt="WhatsApp" />
          <div>
            <h1>WhatsApp</h1>
          </div>
        </div>
        <div className="GitHub">
          <img src={gitHub} alt="GitHub" />
          <div>
            <h1>GitHub</h1>
          </div>
        </div>
        <div className="E-mail">
          <img src={eMail} alt="E-mail" />
          <div>
            <h1>E-mail</h1>
          </div>
        </div>
        <div className="Instagram">
          <img src={instagram} alt="Instagram" />
          <div>
            <h1>Instagram</h1>
          </div>
        </div>
        <div className="LinkedIn">
          <img src={linkedIn} alt="LinkedIn" />
          <div>
            <h1>LinkedIn</h1>
          </div>
        </div>
      </div>
      <p className="direitosReservados">
        © {new Date().getFullYear()} Meu Portfólio. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
