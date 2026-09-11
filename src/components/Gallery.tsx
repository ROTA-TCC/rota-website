import { useState, useRef } from 'react';
import { Card } from './Card';
import { CarouselControls } from './CarouselControls';

interface GalleryItem {
  image: string;
  title?: string;
  description?: string;
}

const GALLERY_ITEMS: (GalleryItem & { size: 'sm' | 'md' | 'lg'; offset: 'top' | 'bottom' | 'center' })[] = [
  {
    image: "/gallery/Screenshot_20260909-132534.jpg",
    size: 'md',
    offset: 'top'
  },
  {
    image: "/gallery/images (4).jpeg",
    size: 'md',
    offset: 'bottom'
  },
  {
    image: "/gallery/Esculturas-de-orixas-do-Dique-do-Tororo.jpg",
    size: 'md',
    offset: 'center'
  },
  {
    image: "/gallery/parque-penhasco-dois-irmaos.jpg",
    size: 'md',
    offset: 'top'
  },
  {
    image: "/gallery/imagem-google-1.jpg",
    size: 'md',
    offset: 'bottom'
  },
  {
    image: "/gallery/imagem-google-2.jpg",
    size: 'md',
    offset: 'top'
  },
  {
    image: "/gallery/parque-da-independencia.jpg",
    title: "Explore com o Rota!",
    description: "Por que correr sempre no mesmo lugar? novas rotas, novas memórias.",
    size: 'lg',
    offset: 'center'
  },
  {
    image: "/gallery/caminho-ao-paraiso.jpg",
    size: 'md',
    offset: 'center'
  },
  {
    image: "/gallery/imagem-google-3.jpg",
    size: 'md',
    offset: 'top'
  },
  {
    image: "/gallery/images (3).jpeg",
    size: 'md',
    offset: 'top'
  },
  {
    image: "/gallery/images (2).jpeg",
    size: 'md',
    offset: 'bottom'
  },
  {
    image: "/gallery/images.jpeg",
    size: 'md',
    offset: 'center'
  }
];

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(6); // Start on the one with text (Sea of Sand)
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  const handleDragStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    setDragOffset(clientX - startX.current);
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragOffset(0);
    
    const diff = clientX - startX.current;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Calculate average card width to determine how many items to skip
    const avgCardWidth = isMobile ? 220 : 300; 
    const gap = isMobile ? 16 : 32;
    const itemWidth = avgCardWidth + gap;

    // Number of items to jump
    const itemsToJump = Math.round(Math.abs(diff) / itemWidth);
    
    if (itemsToJump > 0) {
      if (diff > 0) {
        // Dragging right -> Move prev
        setActiveIndex((prev) => Math.max(0, prev - itemsToJump));
      } else {
        // Dragging left -> Move next
        setActiveIndex((prev) => Math.min(GALLERY_ITEMS.length - 1, prev + itemsToJump));
      }
    }
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
    <div 
      className="w-[100vw] overflow-x-hidden pt-24 pb-32 mb-12 cursor-grab active:cursor-grabbing select-none"
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      onMouseMove={(e) => isDragging.current && handleDragMove(e.clientX)}
      onMouseLeave={() => isDragging.current && handleDragEnd(e.clientX)}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
      onTouchMove={(e) => isDragging.current && handleDragMove(e.touches[0].clientX)}
    >
      <div 
        className="flex items-center gap-4 md:gap-8"
        style={{ 
          transform: `translateX(${getOffset() + dragOffset}px)`,
          transition: isDragging.current ? 'none' : 'transform 500ms ease-in-out',
          width: '100vw'
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
