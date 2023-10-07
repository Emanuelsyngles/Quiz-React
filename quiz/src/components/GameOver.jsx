import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import welldone from '../img/welldone.svg'

import './GameOver.css'

const GameOver = () => {
  return (
    <div id="gameover">
      
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y de z Perguntas.</p>
      <img src={welldone} alt="Fim do Quiz" />
      <button className="btn1">Reiniciar</button>
    </div>
  );
}

export default GameOver
