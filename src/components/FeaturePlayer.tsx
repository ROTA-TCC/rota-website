import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FeaturePlayerProps {
  mediaUrl: string;
}

export const FeaturePlayer: React.FC<FeaturePlayerProps> = ({ mediaUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isGif = mediaUrl.toLowerCase().endsWith('.gif');

  const [aspectRatio, setAspectRatio] = useState<number>(16 / 9);

  useEffect(() => {
    if (!isGif && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [mediaUrl, isGif]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      if (videoWidth && videoHeight) {
        setAspectRatio(videoWidth / videoHeight);
      }
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      setAspectRatio(naturalWidth / naturalHeight);
    }
  };

  return (
    <motion.div
      className="relative w-full rounded-xl overflow-hidden shadow-md bg-neutral-900 mx-auto"
      animate={{ aspectRatio }}
      transition={{ type: 'spring', stiffness: 220, damping: 26 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={mediaUrl}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {isGif ? (
            <img 
              src={mediaUrl} 
              alt="Feature preview" 
              className="w-full h-full object-cover"
              onLoad={handleImageLoad}
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
              onLoadedMetadata={handleLoadedMetadata}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
