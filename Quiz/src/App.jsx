//react, componentes, estáticos
import { useContext, useEffect } from "react";
import Welcome from './components/Welcome'

import Question from "./components/Question";

import { QuizContext } from "./context/quiz";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // embaralhar as perguntas
  }, [])

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
}

export default App;
