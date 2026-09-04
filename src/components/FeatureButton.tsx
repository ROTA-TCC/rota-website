import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeatureButtonProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export const FeatureButton: React.FC<FeatureButtonProps> = ({ title, isActive, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer font-sans
        ${isActive 
          ? 'text-brand-black' 
          : 'text-brand-paragraph bg-transparent'
        }`}
    >
      {/* Background animado para a transição de estado ativo */}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-brand-primary border border-brand-stroke rounded-xl shadow-sm -z-10"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      <span className="relative z-10">{title}</span>
    </button>
  );
};
