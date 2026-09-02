import { useState } from 'react';
import { StepItem } from './StepItem';
import { TourCard } from './TourCard';
import { Tag } from './Tag';
import { motion, AnimatePresence } from 'framer-motion';

import stepTwo from '../assets/modern-tokyo-street-background.webp';
import stepFour from '../assets/7614.jpg';

const tags = [
  "Treinos",
  "Desafios cooperativos",
  "Comunidade",
  "Rotas",
  "Performance",
  "Saúde"
];

const stepsData = [
  {
    number: 1,
    title: "Escolha o seu Objetivo",
    description: "Seja para o seu primeiro quilômetro ou para bater seu recorde na maratona.",
    image: "https://thumbs.dreamstime.com/b/t%C3%AAnis-de-corrida-pretos-novos-na-estrada-asfaltada-no-tempo-de-manh%C3%A3-78131502.jpg?w=992"
  },
  {
    number: 2,
    title: "Defina sua Rota",
    description: "Explore novos caminhos seguros e otimizados para o seu nível técnico.",
    image: stepTwo
  },
  {
    number: 3,
    title: "Dê o Primeiro Passo",
    description: "Monitore seu ritmo e evolução em tempo real sem complicação.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYftpzmsomo2U5_Ceims5AWzSwC9uyzMhAosHNuc0pA&s=10"
  },
  {
    number: 4,
    title: "Sinta a Conquista",
    description: "Veja seu progresso, ganhe badges e compartilhe sua energia com a galera.",
    image: stepFour
  }
];

// Changed 'BookingSection' to 'StepArea' to match what App.tsx expects
export const StepArea: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const activeImage = stepsData.find(s => s.number === activeStep)?.image || stepsData[0].image;

  return (
    <section className="py-20 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-brand-black mb-12"
          >
            Como o Rota te move
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl"
          >
            {tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Side: Tour Card com Animação de Troca */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-brand-stroke shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep}
                src={activeImage}
                alt="Tour Destination"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Right Side: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <span className="text-brand-paragraph text-sm font-semibold uppercase tracking-widest mb-2 block">
                Como funciona
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                corra rápido em 4 simples passos
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {stepsData.map((step) => (
                <StepItem 
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === step.number}
                  onClick={() => setActiveStep(step.number)}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
