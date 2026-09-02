import React from 'react';

interface TourCardProps {
  imageSrc: string;
}

export const TourCard: React.FC < TourCardProps > = ({ imageSrc }) => {
  return (
    <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden group">
      <img
        src={imageSrc}
        alt="Mount Bromo Adventure"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};