import { useState } from "react";
import "../styles/NavBar.css";
import nsDesign from "../assets/img/minha-logo.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

      <div>
        <img className="ns-design" src={nsDesign} alt="Logo" />
      </div>

      <div className="logo">NSDesign</div>

      {/* Ícone hambúrguer */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#projects">Meus Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
