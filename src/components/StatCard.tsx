import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  className ? : string;
}

export const StatCard: React.FC < StatCardProps > = ({ number, label, className = "" }) => {
  return (
    <div className={`glass p-4 md:p-6 rounded-[20px] md:rounded-[28px] flex flex-col gap-1 md:gap-2 w-full md:w-[220px] ${className}`}>
      
      <span className="text-2xl md:text-4xl font-medium tracking-tighter leading-none">
        {number}
      </span>

      <p className="text-white/50 text-[10px] md:text-[13px] font-medium leading-tight max-w-[120px] md:max-w-[160px]">
        {label}
      </p>

    </div>
  );
};