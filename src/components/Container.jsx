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
import aboutImg from "../assets/img/about-img.png";

export default function Container({ children }) {
  return (
    <main>
      <div className="container">
        {children}

        {/* Seção Home */}

        <div className="hero">
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
            <img className="letraT" src={letraT} alt="Letra T" />
            <img className="arrow" src={arrow} alt="Seta Clicando" />

            <div className="typewrite">Design UI/UX</div>
          </picture>
        </div>

        {/* Seção Sobre Mim */}

        <div className="about">
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
          <div className="about-description">
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
        </div>

        {/* Seção Bem Vindo */}

        <div className="bemVindo">
          <h3>
            <p className="l1">BEM</p>
            <p className="l2">VINDO</p>
            <p className="l3">AO MEU</p>
            <p className="l4">PORT</p>
            <p className="l5">FÓLIO</p>
            <p className="l6">DE</p>
          </h3>
        </div>

        {/* Seção Bem Vindo */}

        <div className="meusProjetos">
          <img
            className="idenVisual"
            src={idenVisual}
            alt=" identiade visual"
          />
          <div className="projetosWeb">
            <div>
              <h1>
                Projeto
                <br />
                Web
              </h1>
            </div>
            <img className="notebook" src={note} alt="Projeto Web" />
          </div>
          <div className="logos">
            <div>
              <h1>Logos</h1>
              <img className="boxLogos" src={boxLogos} alt="Caixas de Logos" />
            </div>
          </div>
          <div className="projetosMobile">
            <div>
              <h1>Mobile</h1>
            </div>
            <img className="phone" src={phone} alt="Celular" />
          </div>
        </div>

        {/* Seção Bem Vindo */}

        <div className="contacts">
          <div className="contactDescription">
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
          <div className="entreEmContato">
            <div>
              <h1>ENTRE EM
                <br />CONTATO</h1>
            </div>
            <img className='vetor' src={vetor} alt="vetor" />
          </div>
        </div>
      </div>
    </main>
  );
}
