import React, { useState } from 'react';
import { Feature } from '../types';
import { FeaturePlayer } from './FeaturePlayer';
import { FeatureButton } from './FeatureButton';
import { motion } from 'motion/react';

import gifAnalytics from '../assets/features/Showreel-Grid-Mobile.mp4';
import gifCloud from '../assets/features/Apple-Event-Summary-Slide.mp4';
import gifTeam from '../assets/features/Apple-Event-Title.gif';
import gifSecurity from '../assets/features/16-9.mp4';

const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'rotas personalizadas',
    mediaUrl: gifAnalytics,
  },
  {
    id: '2',
    title: 'comunidade',
    mediaUrl: gifCloud,
  },
  {
    id: '3',
    title: 'Corram juntos',
    mediaUrl: gifTeam,
  },
  {
    id: '4',
    title: 'Segurança',
    mediaUrl: gifSecurity,
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
