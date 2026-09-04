import React from 'react';
import { motion } from 'framer-motion';

interface TourCardProps {
  imageSrc: string;
}

export const TourCard: React.FC < TourCardProps > = ({ imageSrc }) => {
  return (
    <motion.div 
      whileTap={{ scale: 0.95 }}
      className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden group cursor-pointer"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={imageSrc}
        alt="Mount Bromo Adventure"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};