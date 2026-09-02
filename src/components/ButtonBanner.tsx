import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ButtonBanner = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        group flex items-center gap-2 pl-6 pr-2 py-2
        /* Aplicando sua classe de componente personalizada */
        glass-button 
        rounded-full text-brand-primary font-semibold
        cursor-pointer shadow-lg font-sans
        ${className}
      `}
    >
      <span className="text-sm md:text-base tracking-tight">{children}</span>
      
      {/* - bg-white -> bg-brand-primary
        - text-black-custom -> text-brand-black
      */}
      <div className="flex items-center justify-center w-10 h-10 bg-brand-primary rounded-full text-brand-black transition-transform group-hover:rotate-45 shadow-sm">
        <ArrowUpRight size={20} strokeWidth={2.5} />
      </div>
    </motion.button>
  );
};
