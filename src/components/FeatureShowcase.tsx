import React, { useState } from 'react';
import { Feature } from '../types';
import { FeaturePlayer } from './FeaturePlayer';
import { FeatureButton } from './FeatureButton';
import { motion } from 'motion/react';

const gif_1 = '/assets/features/feature-1.webm';
const gif_2 = '/assets/features/feature-2.webm';
const gif_3 = '/assets/features/feature-3.webm';
const gif_4 = '/assets/features/feature-4.webm';

const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'transforma',
    mediaUrl: gif_1,
  },
  {
    id: '2',
    title: 'running',
    mediaUrl: gif_2,
  },
  {
    id: '3',
    title: 'Corram juntos',
    mediaUrl: gif_3,
  },
  {
    id: '4',
    title: 'telas',
    mediaUrl: gif_4,
  },
];

export const FeatureShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<Feature>(FEATURES[0]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Esquerda: Player */}
        <div>
          <FeaturePlayer mediaUrl={activeFeature.mediaUrl} />
        </div>

        { /* Feature Selection Buttons */ }
        <div className="flex flex-wrap justify-center gap-3 mt-[3rem]">
          {FEATURES.map((feature) => (
            <FeatureButton
              key={feature.id}
              title={feature.title}
              isActive={activeFeature.id === feature.id}
              onClick={() => setActiveFeature(feature)}
            />
          ))}
        </div>
    </section>
  );
};
