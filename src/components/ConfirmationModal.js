// src/components/ConfirmationModal.js
import { motion } from 'framer-motion';

export default function ConfirmationModal({ onConfirm, onCancel, tiraiId }) {
  return (
    <div className="modal-overlay">
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3>Konfirmasi Pilihan</h3>
        <p>Apakah kamu yakin ingin memilih Tirai {tiraiId}?</p>
        <p>Kamu tidak bisa mengubah pilihan ini kecuali memiliki nyawa tambahan.</p>
        
        <div className="modal-buttons">
          <motion.button 
            className="cancel-button"
            onClick={onCancel}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Batal
          </motion.button>
          
          <motion.button 
            className="confirm-button"
            onClick={onConfirm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ya, Saya Yakin!
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}