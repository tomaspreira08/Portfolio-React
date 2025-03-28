import { ModuloType } from "../data/modulos";

type ModuloProps = {
  modulo: ModuloType;
};

function Modulo({ modulo }: ModuloProps) {
  return (
    <div className="modulo">
      <h2>{modulo.titulo}</h2>
      <p>{modulo.resumo}</p>
    </div>
  );
}

export default Modulo;
