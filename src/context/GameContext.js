import { createContext, useState, useContext } from 'react';
import { tiraiData } from '.../nameisalsoeffort/src/data/TiraiData.js"';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [gameStage, setGameStage] = useState('home'); // home, quiz, tirai, result
  const [selectedTirai, setSelectedTirai] = useState(null);
  const [shuffledTirai, setShuffledTirai] = useState([]);
  
  // Shuffle tirai saat game dimulai
  const startGame = () => {
    const shuffled = [...tiraiData].sort(() => Math.random() - 0.5);
    setShuffledTirai(shuffled);
    setGameStage('quiz');
  };
  
  const increaseScore = () => {
    setScore(prev => prev + 1);
  };
  
  const nextQuiz = () => {
    setCurrentQuizIndex(prev => prev + 1);
  };
  
  const goToTirai = () => {
    setGameStage('tirai');
  };
  
  const selectTirai = (id) => {
    setSelectedTirai(id);
  };
  
  const resetGame = () => {
    setScore(0);
    setCurrentQuizIndex(0);
    setGameStage('home');
    setSelectedTirai(null);
    setShuffledTirai([]);
  };
  
  return (
    <GameContext.Provider value={{
      score,
      currentQuizIndex,
      gameStage,
      selectedTirai,
      shuffledTirai,
      startGame,
      increaseScore,
      nextQuiz,
      goToTirai,
      selectTirai,
      resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
