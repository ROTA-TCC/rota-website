import { motion } from "motion/react";
import { ButtonBanner } from "./ButtonBanner";
import bannerBackgroundImage from '../assets/full-shot-disabled-man-running.webp';

export const Banner = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh]">
      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] md:rounded-[2.5rem] shadow-2xl">
        {/* Background Image */}
        <img
          src={bannerBackgroundImage}
          alt="imagem banner"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-12 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.5rem] leading-[1.1] md:text-6xl lg:text-7xl font-bold text-brand-primary mb-6 tracking-tight"
          >
            Rota
Encontre o seu Próximo <br className="hidden md:block" /> Ritmo com liberdade
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-stroke text-sm md:text-lg lg:text-xl mb-10 max-w-2xl font-medium leading-relaxed"
          >
            Explore novas ruas e sinta o vento no rosto. A gente cuida da tecnologia para que você possa se concentrar apenas na sua respiração e em cada nova conquista.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ButtonBanner>baixe agora</ButtonBanner>
          </motion.div>
        </div>
      </div>
    </section>
  );
};