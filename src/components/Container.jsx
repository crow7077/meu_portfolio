import "../styles/Container.css";

export default function Container({ children }) {
  return (
    <main>
      <div className="container">
        {children}
        <div className="retangulos"></div>
      </div>
      ;
    </main>
  );
}
