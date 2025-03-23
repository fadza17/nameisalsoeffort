'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

export default function DestinasiReveal({ tiraiData, onClose }) {
  const [playSound] = useSound(tiraiData.sound);
  
  useEffect(() => {
    playSound();
  }, [playSound]);
  
  return (
    <div className="reveal-overlay">
      <motion.div 
        className="reveal-content"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="reveal-header">
          <h2>Selamat! Kamu Mendapatkan:</h2>
        </div>
        
        <motion.div
          className="reveal-info"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img 
            src={tiraiData.revealImage} 
            alt={tiraiData.destinasi} 
            className="reveal-image"
          />
          
          <h3 className="reveal-title">{tiraiData.destinasi}</h3>
          
          <div className="reveal-description">
            <p>{tiraiData.deskripsi}</p>
          </div>
        </motion.div>
        
        <motion.button 
          className="close-button"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Kembali ke Tirai
        </motion.button>
      </motion.div>
    </div>
  );
}
