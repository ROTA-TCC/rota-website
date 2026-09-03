import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AppButtonProps {
  className?: string;
  dark?: boolean;
  text?: string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  className = "",
  dark = false,
  text = "Baixar agora"
}) => {
  return (
    <button
      className={`group flex items-center gap-3 p-1.5 pl-8 rounded-full transition-all duration-300 shadow-xl ${
        dark
          ? "bg-black text-white hover:bg-zinc-900"
          : "bg-white text-black hover:bg-zinc-100"
      } ${className}`}
    >
      <span className="text-sm font-bold tracking-tight">
        {text}
      </span>

      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 rotate-[-45deg] group-hover:rotate-0 ${
          dark
            ? "bg-white text-black"
            : "bg-zinc-900 text-white"
        }`}
      >
        <ArrowUpRight size={24} strokeWidth={2.5} />
      </div>
    </button>
  );
};