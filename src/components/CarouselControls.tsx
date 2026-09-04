import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  progress: number;
}

export const CarouselControls = ({ onPrev, onNext, progress }: CarouselControlsProps) => {
  return (
    <div className="flex items-center justify-center gap-8 mt-24 ml-1 pb-16 pt-8 md:pt-16">
      <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={onPrev}
        className="w-10 h-10 rounded-full border border-brand-stroke flex items-center justify-center hover:bg-brand-ground transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-brand-black" />
      </motion.button>

      <div className="w-46 h-[2px] bg-brand-stroke relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-brand-black transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="w-10 h-10 rounded-full border border-brand-stroke flex items-center justify-center hover:bg-brand-ground transition-colors"
      >
        <ArrowRight className="w-4 h-4 text-brand-black" />
      </motion.button>
    </div>
  );
};