// src/components/QuizSection.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGameContext } from 'C:\Users\LENOVO\Downloads\nameisalsoeffort\nameisalsoeffort\src\context\GameContext.js';
import { quizData } from 'C:\Users\LENOVO\Downloads\nameisalsoeffort\nameisalsoeffort\src\data\QuizData.js';
import useSound from 'use-sound';

export default function QuizSection() {
  const { currentQuizIndex, increaseScore, nextQuiz, goToTirai, score } = useGameContext();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [playCorrect] = useSound('/sounds/correct.mp3');
  const [playWrong] = useSound('/sounds/wrong.mp3');
  const [playQuizSong] = useSound(quizData[currentQuizIndex].song);
  
  useEffect(() => {
    playQuizSong();
    
    return () => playQuizSong.stop();
  }, [currentQuizIndex, playQuizSong]);
  
  const currentQuiz = quizData[currentQuizIndex];
  
  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    if (option === currentQuiz.correctAnswer) {
      playCorrect();
      increaseScore();
    } else {
      playWrong();
    }
    
    setTimeout(() => {
      if (currentQuizIndex < quizData.length - 1) {
        nextQuiz();
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        goToTirai();
      }
    }, 1500);
  };
  
  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="quiz-header">
        <h2>Pertanyaan {currentQuizIndex + 1}/5</h2>
        <div className="score-display">Nyawa: {score}</div>
      </div>
      
      <div className="quiz-content">
        <motion.img 
          src={currentQuiz.image} 
          alt="Quiz"
          className="quiz-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <h3 className="quiz-question">{currentQuiz.question}</h3>
        
        <div className="options-grid">
          {currentQuiz.options.map((option, index) => (
            <motion.button
              key={index}
              className={`option-button ${
                isAnswered
                  ? option === currentQuiz.correctAnswer
                    ? 'correct'
                    : option === selectedOption
                    ? 'wrong'
                    : ''
                  : ''
              }`}
              onClick={() => handleOptionClick(option)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isAnswered}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}