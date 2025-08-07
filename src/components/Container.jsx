import "../styles/Container.css";
import retangulos from "../assets/img/retangulos.png";

export default function Container({ children }) {
  return (
    <main>
      <div className="container">
        {children}
        <div className="retangulo">          
                <img className="retangulos" src={retangulos} alt="Logo" />
        </div>
      </div>
      ;
    </main>
  );
}
