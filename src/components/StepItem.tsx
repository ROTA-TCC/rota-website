import React from 'react';

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  isActive ? : boolean;
  onClick ? : () => void;
}

export const StepItem: React.FC < StepItemProps > = ({ number, title, description, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-brand-foreground' : 'bg-transparent hover:bg-brand-foreground/50'}`}
    >
      <div 
        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-lg font-bold transition-all duration-300 ${isActive ? 'bg-brand-primary text-brand-black' : 'bg-brand-foreground text-brand-black/40'}`}
      >
        {number}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-brand-black">{title}</h3>
        <p className="text-[15px] leading-relaxed text-brand-paragraph max-w-[320px]">
          {description}
        </p>
      </div>
    </div>
  );
};