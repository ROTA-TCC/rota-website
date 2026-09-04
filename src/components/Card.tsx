import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CardProps {
  image: string;
  title ? : string;
  description ? : string;
  isActive ? : boolean;
  key ? : React.Key;
  size ? : 'sm' | 'md' | 'lg';
  offset ? : 'top' | 'bottom' | 'center';
}

export const Card = ({ image, title, description, isActive, size = 'md', offset = 'center' }: CardProps) => {
  const sizeClasses = {
    sm: 'w-[180px] h-[240px] md:w-[240px] md:h-[320px]',
    md: 'w-[220px] h-[300px] md:w-[300px] md:h-[420px]',
    lg: 'w-[280px] h-[280px] md:w-[400px] md:h-[400px]', // Square for active
  };
  
  const offsetClasses = {
    top: '-translate-y-12 md:-translate-y-16',
    bottom: 'translate-y-12 md:translate-y-16',
    center: 'translate-y-0',
  };
  
  return (
    <motion.div 
      className={`relative flex-shrink-0 transition-all duration-500 ease-out ${
        sizeClasses[size]
      } ${isActive ? 'opacity-100' : 'opacity-60'} ${offsetClasses[offset]}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden mb-5">
        <img 
          src={image} 
          alt={title || "Gallery image"} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {title && description && (
        <motion.div 
          className="w-full px-1"
          whileHover="hover"
        >
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-sm md:text-base font-semibold text-brand-black leading-tight">
              {title}
            </h3>
            <motion.div
              variants={{
                hover: { x: 5, y: -5 }
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-brand-black mt-0.5" />
            </motion.div>
          </div>
          <p className="text-[10px] md:text-xs text-brand-paragraph max-w-[90%] leading-relaxed font-medium">
            {description}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};