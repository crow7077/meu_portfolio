import { useState } from "react";
import "../styles/NavBar.css";
import nsDesign from "../assets/img/minha-logo.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navegação suave para o ID da seção
  const handleNav = (e, targetId) => {
    e.preventDefault(); // evita o "pulo" instantâneo
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // fecha o menu após clicar
    }
  };

  return (
    <nav>
      <img className="ns-design" src={nsDesign} alt="Logo" />
      <div className="logo">NSDesign</div>

      {/* Ícone hambúrguer */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" ? setMenuOpen(!menuOpen) : null)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#home" onClick={(e) => handleNav(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleNav(e, "about")}>
            Sobre mim
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNav(e, "projects")}>
            Meus Projetos
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNav(e, "contact")}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
