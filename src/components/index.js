// src/pages/index.js
import { useGameContext } from '../context/GameContext';
import HomePage from 'C:\Users\LENOVO\Downloads\nameisalsoeffort\nameisalsoeffort\src\components\Homepage.js';
import QuizSection from '../components/QuizSection';
import TiraiSection from '../components/TiraiSection';

export default function Home() {
  const { gameStage } = useGameContext();
  
  return (
    <div className="main-container">
      {gameStage === 'home' && <HomePage />}
      {gameStage === 'quiz' && <QuizSection />}
      {gameStage === 'tirai' && <TiraiSection />}
    </div>
  );
}