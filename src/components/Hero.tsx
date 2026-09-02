import React from 'react';
import { motion } from 'motion/react';
import { StatCard } from './StatCard';
import { AppButton } from './AppButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycmlkYSUyMGRvJTIwcGFycXVlfGVufDB8fDB8fHww" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-zinc-950/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex-1 flex flex-col px-6 py-10 md:px-10 md:py-10 max-w-[1800px] mx-auto w-full">

        {/* Top Taglines (Desktop) */}
        <div className="hidden md:flex justify-between items-start pt-24 mb-auto">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white/80 text-[15px] font-medium max-w-[220px] leading-tight"
          >
            conheça a prazer e a saude em um so lugar. 
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white/80 text-[15px] font-medium text-right max-w-[180px] leading-tight"
          >
            A tecnologia a serviço de uma vida mais leve.
          </motion.p>
        </div>

        {/* Main Content Area - Pushed to bottom on mobile */}
        <div className="flex-1 flex flex-col justify-end pb-4 md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-end w-full">

            {/* Right Side: Stats (Desktop & Mobile) */}
           <div className="lg:col-span-4 lg:col-start-9 flex flex-row md:flex-col gap-3 md:gap-4 items-end ml-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 md:flex-none"
              >
                <StatCard 
                  number="150k+" 
                  label="Pessoas que escolheram correr com mais leveza e estilo." 
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1 md:flex-none"
              >
                <StatCard 
                  number="549" 
                  label="Trajetos exclusivos desenhados por quem entende a cidade." 
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Area - Tightly grouped on mobile */}
        <div className="mt-6 md:mt-16 flex flex-col items-center gap-6 md:gap-8">
          {/* Mobile Tagline */}
          <p className="md:hidden text-white/90 text-center text-base font-medium max-w-[280px] leading-tight">
            Projetamos cada trajeto para que a beleza da cidade inspire o seu melhor movimento.
          </p>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AppButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};