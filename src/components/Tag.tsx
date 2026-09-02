import React from 'react';
import { Sparkles } from 'lucide-react';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <div className="flex items-center gap-2 px-3 pt-1.5 whitespace-nowrap">
      {/* black-rich/40 vira brand-black/40 */}
      <Sparkles className="w-3.5 h-3.5 text-brand-black/40" />
      {/* black-rich/60 vira brand-black/60 */}
      <span className="text-[13px] font-medium text-brand-black/60">{label}</span>
    </div>
  );
};
