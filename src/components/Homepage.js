// src/components/HomePage.js
import { useGameContext } from '"C:\Users\LENOVO\Downloads\nameisalsoeffort\nameisalsoeffort\src\context\GameContext.js"';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { startGame } = useGameContext();
  
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-content">
        <h1 className="home-title">Name is also effort (Namanya juga usaha)</h1>
        <p className="home-description">
          Kalau kita healing dulu bareng? 😚 Biar otak fresh, hati senang, dan UTS pun bisa ditaklukkan dengan lancar! 
          Tapii... aku punya cara seru buat nentuin ke mana kita bakal pergi! 🎮💖
        </p>
        
        <div className="game-instructions">
          <p>Aku udah bikin game spesial buat kamu:</p>
          <ul>
            <li>❓ Jawab 5 pertanyaan spesial dari aku</li>
            <li>🎁 Setiap jawaban benar = 1 kesempatan membuka tirai misteri</li>
            <li>🚪 Di balik tirai ada destinasi wisata + challenge seru yang harus kita lakukan!</li>
            <li>💡 Kamu ga bakal tau isinya sampai kamu membukanya!</li>
          </ul>
          
          <p>Jadi, siap untuk main dan menemukan kejutan seru sebelum kita UTS? 🥰</p>
          <p>Pilih tirai dengan baik, ya! Siapa tahu ada sesuatu yang lebih spesial menunggu di baliknya... 💖✨</p>
        </div>
        
        <motion.button 
          className="start-button"
          onClick={startGame}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Game
        </motion.button>
      </div>
    </motion.div>
  );
}