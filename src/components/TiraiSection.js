// src/components/TiraiSection.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameContext } from '../context/GameContext';
import ConfirmationModal from './ConfirmationModal';
import DestinasiReveal from './DestinasiReveal';

export default function TiraiSection() {
  const { score, shuffledTirai, selectTirai, selectedTirai } = useGameContext();
  const [showModal, setShowModal] = useState(false);
  const [tempSelectedTirai, setTempSelectedTirai] = useState(null);
  const [remainingChoices, setRemainingChoices] = useState(score);
  const [showResult, setShowResult] = useState(false);
  
  const handleTiraiClick = (id) => {
    if (remainingChoices <= 0) return;
    
    setTempSelectedTirai(id);
    setShowModal(true);
  };
  
  const handleConfirm = () => {
    selectTirai(tempSelectedTirai);
    setRemainingChoices(prev => prev - 1);
    setShowModal(false);
    setShowResult(true);
  };
  
  const handleCancel = () => {
    setTempSelectedTirai(null);
    setShowModal(false);
  };
  
  const handleCloseResult = () => {
    setShowResult(false);
  };
  
  return (
    <motion.div 
      className="tirai-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="tirai-header">
        <h2>Pilih Tiraimu!</h2>
        <p>Kamu memiliki {remainingChoices} kesempatan untuk memilih tirai</p>
      </div>
      
      <div className="tirai-grid">
        {shuffledTirai.map((tirai) => (
          <motion.div
            key={tirai.id}
            className={`tirai-item ${selectedTirai === tirai.id ? 'selected' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTiraiClick(tirai.id)}
          >
            <img 
              src={tirai.image} 
              alt={`Tirai ${tirai.id}`} 
              className="tirai-image"
            />
            <p>Tirai {tirai.id}</p>
          </motion.div>
        ))}
      </div>
      
      {showModal && (
        <ConfirmationModal 
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          tiraiId={tempSelectedTirai}
        />
      )}
      
      {showResult && selectedTirai && (
        <DestinasiReveal 
          tiraiData={shuffledTirai.find(t => t.id === selectedTirai)}
          onClose={handleCloseResult}
        />
      )}
    </motion.div>
  );
}