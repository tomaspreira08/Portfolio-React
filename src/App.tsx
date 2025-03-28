import modulos from "./data/modulos";
import Modulo from "./components/Modulo";
import Certificado from "./components/Certificado";

function App() {
  return (
    <div>
      <h1>Meu Portfólio de Certificação</h1>
      <h2>Resumos dos Módulos</h2>

      {modulos.map((modulo) => (
        <Modulo key={modulo.id} modulo={modulo} />
      ))}

      <Certificado />
    </div>
  );
}

export default App;
