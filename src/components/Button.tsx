import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant ? : "primary" | "outline" | "ghost";
  className ? : string;
  onClick ? : () => void;
}

export const Button = ({ children, variant = "primary", className = "", onClick }: ButtonProps) => {
  const baseStyles = "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-brand-black hover:bg-opacity-90 active:bg-opacity-90",
    outline: "border border-white/30 text-white hover:bg-white/10 active:bg-white/10 backdrop-blur-md",
    ghost: "text-white hover:bg-white/10 active:bg-white/10",
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      <div className="bg-brand-black text-white rounded-full p-1 ml-1">
        <ArrowUpRight size={16} />
      </div>
    </motion.button>
  );
};