import "../styles/Container.css";
import retangulos from "../assets/img/retangulos.png";
import group1 from "../assets/img/group-1.png";

export default function Container({ children }) {
  return (
    <main>
      <div className="container">
        {children}
        <div className="retangulo">
          <picture>
            <source media="(min-width: 768px)" srcSet={group1} />
            <img
              className="retangulos"
              src={retangulos}
              alt="Imagem decorativa"
            />
          </picture>
        </div>
      </div>
      ;
    </main>
  );
}
