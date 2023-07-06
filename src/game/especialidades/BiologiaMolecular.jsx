import { useState } from "react";

const BiologiaMolecular = () => {
  // Crear un estado individual para cada botón
  const [isFlipped, setIsFlipped] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });

  const handleClick = (button) => {
    // Cambiar el estado solo para el botón seleccionado
    setIsFlipped((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
    console.log("Carta jugada");
  };

  return (
    <section className="columns">
      <div className="column">
        <div className="columnName">Biologia molecular</div>

        <div className={`card ${isFlipped.button1 ? "flipped" : ""}`}>
          <div className="card-inner">
            <div className="card-front">
              <button
                onClick={() => handleClick("button1")}
                className="partQuestions"
              >
                20
              </button>
            </div>
            <div className="card-back">Carta jugada</div>
          </div>
        </div>

        <div className={`card ${isFlipped.button2 ? "flipped" : ""}`}>
          <div className="card-inner">
            <div className="card-front">
              <button
                onClick={() => handleClick("button2")}
                className="partQuestions"
              >
                40
              </button>
            </div>
            <div className="card-back">Carta jugada</div>
          </div>
        </div>

        <div className={`card ${isFlipped.button3 ? "flipped" : ""}`}>
          <div className="card-inner">
            <div className="card-front">
              <button
                onClick={() => handleClick("button3")}
                className="partQuestions"
              >
                60
              </button>
            </div>
            <div className="card-back">Carta jugada</div>
          </div>
        </div>

        <div className={`card ${isFlipped.button4 ? "flipped" : ""}`}>
          <div className="card-inner">
            <div className="card-front">
              <button
                onClick={() => handleClick("button4")}
                className="partQuestions"
              >
                80
              </button>
            </div>
            <div className="card-back">Carta jugada</div>
          </div>
        </div>

        <div className={`card ${isFlipped.button5 ? "flipped" : ""}`}>
          <div className="card-inner">
            <div className="card-front">
              <button
                onClick={() => handleClick("button5")}
                className="partQuestions"
              >
                100
              </button>
            </div>
            <div className="card-back">Carta jugada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiologiaMolecular;
