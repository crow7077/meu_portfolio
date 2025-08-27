import "../styles/Container.css";
import cv from "../assets/img/cv.pdf";
import retangulos from "../assets/img/retangulos.png";
import group1 from "../assets/img/group-1.png";
import letraT from "../assets/img/letra-t-vetorizada.png";
import folderCv from "../assets/img/folder.svg";
import arrow from "../assets/img/arrow.svg";
import tools from "../assets/img/tools.svg";
import idenVisual from "../assets/img/identidade-visual.svg";
import boxLogos from "../assets/img/boxLogos.svg";
import phone from "../assets/img/phone.svg";
import note from "../assets/img/notebook.svg";
import paintBucket from "../assets/img/paint-bucket.svg";
import vetor from "../assets/img/vetor.svg";
import fileLogo from "../assets/img/files-projecs2.svg";
import notes from "../assets/img/Notes.svg";
import phones from "../assets/img/phones.svg";
import aboutImg from "../assets/img/about-img.png";

export default function Container({ children }) {
  return (
    <main>
      <div className="container">
        {children}

        {/* Seção Home */}

        <div id="home" className="hero">
          <picture>
            <source media="(min-width: 768px)" srcSet={group1} />
            <img
              className="retangulos"
              src={retangulos}
              alt="Imagem decorativa"
            />
          </picture>
          <picture>
            <source media="(min-width: 768px)" srcSet={folderCv} />
            <img
              className="foldercv"
              src={folderCv}
              alt="Imagem da pasta"
              onClick={() => window.open(cv, "_blank")}
            />
          </picture>
          <picture>
            <source media="(min-width: 768px)" srcSet={letraT} />
            <img className="letraT" src={letraT} alt="Letra T" />
          </picture>
          <picture>
            <source media="(min-width: 768px)" srcSet={arrow} />
            <img className="arrow" src={arrow} alt="Seta Clicando" />
          </picture>
          <div className="typewrite">Design UI/UX</div>
        </div>

        {/* Seção Sobre Mim */}

        <div id="about" className="about">
          <div className="about-title">
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
          <div className="about-description-mobile">
            <h1>
              Me chamo Renato Nunes Junior e sou
              <br />
              Desenhista, Designer Gráfico,
              <br />
              Digital e UI Designer.
              <br />
              Conheci a arte do desenho aos 7 anos de
              <br />
              idade e desde então, venho desenvolvendo
              <br />
              minhas técnicas artísticas. Busquei
              <br />
              conhecimento na área digital e me tornei
              <br />
              Designer Gráfico, com mais de 4 anos de
              <br />
              experiência, apaixonado por criar visuais
              <br />
              impactantes e experiências digitais intuitivas.
              <br />
              Tenho uma sólida base em softwares como
              <br />
              CorelDRAW, Photoshop, Canva, Figma e
              <br />
              Procreate. Ao longo da minha carreira,
              <br />
              desenvolvi diversas habilidades, desde a
              <br />
              criação de logotipos e artes digitais até
              <br />a prototipação de interfaces para sites
              <br />e aplicativos.
              <br />
              Destaco-me pela minha capacidade de
              <br />
              adaptação e por estar sempre atualizado
              <br />
              com as últimas tendências do mercado.
            </h1>
          </div>
          <div className="about-description-desktop">
            <h1>
              Me chamo Renato Nunes Junior e sou Desenhista, Designer
              <br />
              Gráfico, Digital e UI Designer. Conheci a arte do desenho aos
              <br />
              7 anos de idade e desde então, venho desenvolvendo minhas
              <br />
              técnicas artísticas. Busquei conhecimento na área digital e
              <br />
              me torneiDesigner Gráfico, com mais de 4 anos de
              <br />
              experiência, apaixonado por criar visuais impactantes e
              <br />
              experiências digitais intuitivas. Tenho uma sólida base em
              <br />
              softwares como CorelDRAW, Photoshop, Canva, Figma e
              <br />
              Procreate. Ao longo da minha carreira, desenvolvi diversas
              <br />
              habilidades, desde a criação de logotipos e artes digitais até
              <br />
              a prototipação de interfaces para sites e aplicativos.
              <br />
              Me destaco pela minha capacidade de adaptação e por estar
              <br />
              sempre atualizado com as últimas tendências do mercado.
            </h1>
          </div>
        </div>

        {/* Seção Bem Vindo */}

        <div className="bemVindo-mobile">
          <h3>
            <p className="l1-mobile">BEM</p>
            <p className="l2-mobile">VINDO</p>
            <p className="l3-mobile">AO MEU</p>
            <p className="l4-mobile">PORT</p>
            <p className="l5-mobile">FÓLIO</p>
            <p className="l6-mobile">DE</p>
          </h3>
        </div>
        <div className="bemVindo-desktop">
          <h3>
            <p className="l1-desktop">BEM VINDO</p>
            <p className="l2-desktop">AO MEU</p>
            <p className="l3-desktop">PORTFÓLIO</p>
            <p className="l4-desktop">DE</p>
          </h3>
        </div>

        {/* Seção Meus Projetos */}

        <div className="meusProjetos">
          <img
            className="idenVisual"
            src={idenVisual}
            alt=" identiade visual"
          />
        </div>
        <div className="projetosWeb">
          <div>
            <h1>
              Projeto
              <br />
              Web
            </h1>
          </div>
          <picture>
            <source media="(min-width: 768px)" srcSet={notes} />
            <img className="note" src={note} alt="note" />
          </picture>
        </div>
        <div className="logos">
          <h1>Logos</h1>
          <picture>
            <source media="(min-width: 768px)" srcSet={fileLogo} />
            <img className="boxLogo" src={boxLogos} alt="Logo" />
          </picture>
        </div>
        <div id="mobile">
          <div className="projetosMobile">
            <h1>Mobile</h1>
            <picture>
              <source media="(min-width: 768px)" srcSet={phones} />
              <img className="phone" src={phone} alt="phone" />
            </picture>
          </div>
        </div>

        {/* Seção Contatos */}

        <div id="contacts">
          <div className="contactDescription">
            <div className="description1">
              <h1>
                <p>MEU ESTILO DE</p>
                <br />
                <p>
                  <span className="destaque">DESIGN</span> É UM
                </p>
                <br />
                <p>REFLEXO DA MINHA</p>
                <br />
                <p>PERSONALIDADE.</p>
              </h1>
              <img className="paint" src={paintBucket} alt="paint" />
              <div className="box-yellow"></div>
            </div>
            <div className="description2">
              <div className="entreEmContato">
                <h1>
                  ENTRE EM
                  <br />
                  CONTATO
                </h1>
                <img className="vetor" src={vetor} alt="vetor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
