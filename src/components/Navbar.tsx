import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppButton } from './AppButton';

import logoWhite from '../assets/logo-branca.svg';
import logoBlack from '../assets/logo-preta.svg';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          const heroElement = document.getElementById('hero');
          const navHeight = 80;
          
          if (heroElement) {
            const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
            
            setIsPastHero(scrollPos > heroBottom - navHeight / 2);
            setIsTransitioning(
              scrollPos > heroBottom - navHeight && scrollPos < heroBottom
            );
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = ['Home', 'memorias', 'comunidade', 'funcionalidades', 'passos'];
  const useDarkTheme = isPastHero && !isTransitioning;
  
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-10 ${
        isTransitioning ? 'mix-blend-difference' : ''
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <img
              src={useDarkTheme ? logoBlack : logoWhite}
              alt="Logo"
              className={`w-full h-full object-contain ${
                isTransitioning ? 'brightness-0 invert' : ''
              }`}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex items-center gap-1 border rounded-full px-2 py-1.5 transition-all duration-300 ${
            useDarkTheme
              ? 'bg-black/5 border-black/10'
              : 'bg-white/10 border-white/10 backdrop-blur-md'
          }`}
        >
          {navLinks.map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-6 py-2 rounded-full text-[13px] font-bold transition-colors ${
                idx === 0
                  ? useDarkTheme
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                  : useDarkTheme
                  ? 'text-black/60 hover:text-black'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social + CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3 mr-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  useDarkTheme
                    ? 'border-black/10 text-black hover:bg-black hover:text-white'
                    : 'border-white/10 text-white hover:bg-white hover:text-black'
                }`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <AppButton
              dark={useDarkTheme}
              className="scale-90 origin-right transition-all duration-500"
            />
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center transition-transform"
          >
            <div className="relative w-5 h-2 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }}
                className={`w-full h-[1.5px] rounded-full ${
                  useDarkTheme ? 'bg-black' : 'bg-white'
                }`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }}
                className={`w-full h-[1.5px] rounded-full ${
                  useDarkTheme ? 'bg-black' : 'bg-white'
                }`}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu (RESTORED FULL VERSION) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-zinc-950/40 backdrop-blur-3xl z-[105] flex flex-col border-l border-white/10 overflow-y-auto"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.2 }}
                className="absolute -top-1/4 -right-1/4 w-full h-full bg-white rounded-full blur-[120px]"
              />
            </div>

            <div className="relative z-10 flex-1 flex flex-col p-8 pt-32 max-w-md mx-auto w-full">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
                  navegação
                </span>

                {navLinks.map((item, idx) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="group flex items-center justify-between py-2"
                  >
                    <span className="text-5xl font-light tracking-tighter group-hover:pl-4 transition-all duration-500 text-white">
                      {item}
                    </span>
                    <div className="w-0 h-[1px] bg-white group-hover:w-12 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-12 flex flex-col gap-12">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-start"
                >
                  <AppButton className="w-full max-w-[240px] justify-between" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                    Follow us
                  </span>

                  <div className="flex items-center gap-8">
                    <a href="#" className="text-white hover:text-white/60 transition-colors"><Facebook size={24} /></a>
                    <a href="#" className="text-white hover:text-white/60 transition-colors"><Instagram size={24} /></a>
                    <a href="#" className="text-white hover:text-white/60 transition-colors"><Twitter size={24} /></a>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};