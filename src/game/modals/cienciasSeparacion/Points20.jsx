import { useState } from 'react';
import question from '../questions/cienciasSeparacion.json'

const Points20 = ({setModal, selectedIndex}) => {
const [showAsnwer, setShowAnswer ] = useState(false)
const closeModal = () => {
  setModal(false)
}

  return (
    <div className='modalWindowCont'>
        <div className='modalQuest'>
          <h1>question: {question[selectedIndex].id} </h1>
          <h3>{question[selectedIndex].question}</h3>
        </div>

        <div className="modalAnswer">
          <h1>Answer: </h1>
          <h3>{showAsnwer? question[selectedIndex].answer : "¿¿¿¿¿?????"}</h3>
          <button onClick={() => setShowAnswer(!showAsnwer)}>Show Answer</button>
        </div>
          <button className='closeModal' onClick={closeModal}>Close</button>

    </div>
  );
};

export default Points20;
