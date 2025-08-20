import "../styles/Container.css";
import retangulos from "../assets/img/retangulos.png";
import group1 from "../assets/img/group-1.png";
import fundoDesign from "../assets/img/fundoDesign.png";
import folderCv from "../assets/img/folder.svg";
import arrow from "../assets/img/arrow.svg";
import tools from "../assets/img/tools.svg";
import aboutImg from "../assets/img/about-img.png";

export default function Container({ children }) {
  return (
    <main>
      <div className="container">
        {children}

        {/* Seção Home */}

        <div className="hero">
          <img className="fundoDesign" src={fundoDesign} alt="Escrita design" />
          <picture>
            <source media="(min-width: 768px)" srcSet={group1} />
            <img
              className="retangulos"
              src={retangulos}
              alt="Imagem decorativa"
            />
            <img
              className="foldercv"
              src={folderCv}
              alt="Imagem da pasta"
              onClick={() => window.open(cv, "_blank")}
            />
            <img className="arrow" src={arrow} alt="Seta Clicando" />

            <div className="typewrite">Design UI/UX</div>
          </picture>
        </div>

        {/* Seção Sobre Mim */}

        <div className="about">
          <div className="about_title">
            <h2>
              SOBRE
              <br />
              MIM
            </h2>
          </div>
          <div className="about-img-container">
            <img className="tools" src={tools} alt="Ferramentas" />
            <img className="aboutImg" src={aboutImg} alt="Foto de perfil" />
          </div>
          <div className="about-description">
            <h1>
              Me chamo Renato Nunes Junior e sou
              <br />Desenhista, Designer Gráfico,
              <br />Digital e UI Designer.
              <br />Conheci a arte do desenho aos 7 anos de
              <br />idade e desde então, venho desenvolvendo
              <br />minhas técnicas artísticas. Busquei
              <br />conhecimento na área digital e me tornei
              <br />Designer Gráfico, com mais de 4 anos de
              <br />experiência, apaixonado por criar visuais
              <br />impactantes e experiências digitais intuitivas.
              <br />Tenho uma sólida base em softwares como
              <br />CorelDRAW, Photoshop, Canva, Figma e
              <br />Procreate. Ao longo da minha carreira,
              <br />desenvolvi diversas habilidades, desde a
              <br />criação de logotipos e artes digitais até
              <br />a prototipação de interfaces para sites
              <br />e aplicativos.
              <br />Destaco-me pela minha capacidade de
              <br />adaptação e por estar sempre atualizado
              <br />com as últimas tendências do mercado.
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
