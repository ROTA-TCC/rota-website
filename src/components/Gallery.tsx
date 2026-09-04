import { useState } from 'react';
import { Card } from './Card';
import { CarouselControls } from './CarouselControls';

interface GalleryItem {
  image: string;
  title?: string;
  description?: string;
}

const GALLERY_ITEMS: (GalleryItem & { size: 'sm' | 'md' | 'lg'; offset: 'top' | 'bottom' | 'center' })[] = [
  {
    image: "https://trilhandomontanhas.com/arquivos/2017-08/parque-natural-municipal-penhasco-dois-irmaos-rio-de-janeiro-maior.jpg",
    size: 'md',
    offset: 'top'
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbz6daGjbkolBnWfAKwsJ-7S2OwPEjyFSFiICyNhByTA&s=10",
    size: 'md',
    offset: 'bottom'
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVWVBKYBSnqyBhQB27jpksbazaOWTJgsP7M9L785XBrnxGggOMPMzI885&s=10",
    size: 'md',
    offset: 'top'
  },
  {
    image: "https://imgmd.net/images/c_limit%2Cw_1600/v1/guia/1583273/parque-da-independencia-ipiranga-173-4428-l.jpg",
    title: "Explore com o Rota!",
    description: "Por que correr sempre no mesmo lugar? novas rotas, novas memórias.",
    size: 'lg',
    offset: 'center'
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Caminho_ao_paraiso.JPG",
    size: 'md',
    offset: 'center'
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevjhhUrzMH6pfVSGx5_0g2RnJTyRbG8-B_DBEsg9DEbWgBSiBLOufpHg&s=10",
    size: 'md',
    offset: 'top'
  }
];

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Start on the one with text (Sea of Sand)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  const progress = ((activeIndex + 1) / GALLERY_ITEMS.length) * 100;

  // Calculate the offset to center the active card
  const getOffset = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const gap = isMobile ? 16 : 32;
    const widths = GALLERY_ITEMS.map(item => {
      if (item.size === 'sm') return isMobile ? 180 : 240;
      if (item.size === 'md') return isMobile ? 220 : 300;
      return isMobile ? 280 : 400; // lg (active square)
    });

    let offset = 0;
    for (let i = 0; i < activeIndex; i++) {
      offset += widths[i] + gap;
    }

    // Center the active card
    const activeWidth = widths[activeIndex];
    const centerOffset = isMobile ? window.innerWidth / 2 : window.innerWidth / 2;

    return -(offset + activeWidth / 2 - centerOffset);
  };

  return (
    <div className="w-full overflow-x-hidden pt-24 pb-32 mb-12">
      <div 
        className="flex items-center gap-4 md:gap-8 transition-transform duration-700 ease-in-out px-4 md:px-8"
        style={{ 
          transform: `translateX(${getOffset()}px)` 
        }}
      >
        {GALLERY_ITEMS.map((item, index) => (
          <Card 
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            isActive={index === activeIndex}
            size={item.size}
            offset={item.offset}
          />
        ))}
      </div>

      <CarouselControls 
        onPrev={handlePrev}
        onNext={handleNext}
        progress={progress}
      />
    </div>
  );
};