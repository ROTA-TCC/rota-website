import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FeaturePlayerProps {
  mediaUrl: string;
}

export const FeaturePlayer: React.FC<FeaturePlayerProps> = ({ mediaUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isGif = mediaUrl.toLowerCase().endsWith('.gif');

  useEffect(() => {
    if (!isGif && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [mediaUrl, isGif]);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={mediaUrl}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full"
        >
          {isGif ? (
            <img 
              src={mediaUrl} 
              alt="Feature preview" 
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              src={mediaUrl}
              className="w-full h-full object-cover"
              loop
              muted
              autoPlay
              playsInline
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};