import React from 'react';
import { motion } from 'framer-motion';

// Refatorado para incluir imagens responsivas (mobile vs desktop)
export interface SocialFeature {
  title: string;
  description: string;
  image: {
    desktop: string;
    mobile: string;
  };
}

const socialFeatures: SocialFeature[] = [
  {
    title: "Desafios em Equipe",
    description: "Junte-se a amigos para bater metas coletivas e desbloquear conquistas exclusivas no app.",
    image: {
      desktop: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80&w=1200",
      mobile: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&q=80&w=600"
    }
  },
  {
    title: "Ranking Local",
    description: "Veja sua posição na sua cidade, celebre o progresso e motive-se com corredores do seu nível.",
    image: {
      desktop: "https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&q=80&w=1200",
      mobile: "https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&q=80&w=600"
    }
  },
  {
    title: "Clubes de Corrida",
    description: "Descubra grupos próximos a você, participe de treinos abertos e expanda sua rede de contatos.",
    image: {
      desktop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIReLoElr2jfseDJoxJN_pIpmDAYs8O41eF355o5QTQ&s=10",
      mobile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIReLoElr2jfseDJoxJN_pIpmDAYs8O41eF355o5QTQ&s=10"
    }
  },
  {
    title: "Rotas Compartilhadas",
    description: "Mostre seus trajetos favoritos, troque dicas de percurso e inspire outros atletas da comunidade.",
    image: {
      desktop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9DIsSE48d5MWSdXdPczXRLENv8JtdrTs2hk1sj_-TA&s=10",
      mobile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9DIsSE48d5MWSdXdPczXRLENv8JtdrTs2hk1sj_-TA&s=10"
    }
  }
];

function FeatureCard({ feature }: { feature: SocialFeature }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col gap-3 cursor-pointer"
    >
      {/* Container Aspect-Square para um visual moderno e consistente */}
      <div className="aspect-square overflow-hidden rounded-2xl bg-brand-foreground relative">
        <picture>
          {/* Serve a imagem leve para celular */}
          <source media="(max-width: 768px)" srcSet={feature.image.mobile} />
          {/* Serve a imagem nítida para desktop */}
          <source media="(min-width: 769px)" srcSet={feature.image.desktop} />
          {/* Fallback para navegadores sem suporte a picture */}
          <img 
            src={feature.image.desktop} 
            alt={feature.title}
            className="h-full w-full object-cover transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold tracking-tight text-brand-black">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-brand-paragraph">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function CommunityGrids({ 
  features = socialFeatures,
}: { features?: SocialFeature[] }) {
  // Imagem de destaque com URLs responsivas e testadas
  const featuredImage = {
    desktop: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1200",
    mobile: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600"
  };

  return (
    <div className="min-h-screen bg-brand-primary px-6 pb-20 pt-16 font-sans md:px-12 lg:px-24">
      
      <main className="mx-auto max-w-7xl">
        {/* lg:items-stretch garante que a imagem da esquerda iguale a altura do grid da direita */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">

          {/* Featured Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-full min-h-[500px] w-full overflow-hidden rounded-2xl bg-brand-foreground lg:col-span-5"
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={featuredImage.mobile} />
              <source media="(min-width: 769px)" srcSet={featuredImage.desktop} />
              <img 
                src={featuredImage.desktop} // Fallback
                alt="Comunidade de Corredores"
                className="absolute inset-0 h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </picture>
            
            {/* Gradiente escuro para garantir contraste perfeito do texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Texto posicionado no fundo, usando 4xl no desktop */}
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="max-w-md text-3xl font-bold tracking-tight leading-tight text-white md:text-4xl lg:text-5xl">
                {/* Replaced 'tribo' with 'Comunidade' */}
                Encontre a sua Comunidade e Vá Mais Longe
              </h2>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:col-span-7">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
