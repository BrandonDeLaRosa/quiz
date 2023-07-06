import BiologiaMolecular from "./especialidades/BiologiaMolecular";
import Biotecnologia from "./especialidades/Biotecnologia";
import Temeperatura from "./especialidades/Temperatura";
import CienciasSeparacion from "./especialidades/cienciasSeparacion";
import Especialidades from "./especialidades/especialidades";

const GameBoard = () => {

  return (
    <div className="gameBoardContainer">
      <div className="gameBoardOptions">
            <CienciasSeparacion/>
            <Biotecnologia/>
            <BiologiaMolecular/>
            <Temeperatura/>
            <Especialidades/>
      </div>
    </div>
  );
};

export default GameBoard;
