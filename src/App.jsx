import './App.css'; 
import GameBoard from './game/GameBoard';

const Card = () => {

  return (
    <div className='appContainer'>
      <h1 className='boardTitle'>Inolab Quiz</h1>
      <GameBoard/>
    </div>
  );
};

export default Card;
