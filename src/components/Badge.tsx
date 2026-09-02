import { Sparkles } from 'lucide-react';

interface BadgeProps {
  text: string;
}

export const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 px-3 rounded-full border border-brand-stroke bg-brand-white flex items-center">
        <span className="text-[11px] font-medium tracking-wide text-brand-black">
          {text}
        </span>
      </div>
      <div className="w-10 h-10 rounded-full border border-brand-stroke bg-brand-white flex items-center justify-center">
        <Sparkles className="w-3.5 h-3.5 text-brand-black" />
      </div>
    </div>
  );
};