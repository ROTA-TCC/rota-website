import React from 'react';
import logoPreta from '../assets/logo-preta.svg';


export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand-primary pt-[4rem] pb-[3rem] px-[5%] font-sans">
      <div className="max-w-[80rem] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-[2rem] mb-[2rem]">
          <div className="flex flex-col gap-[1.5rem] max-w-[20rem]">
<div className="flex items-center gap-[0.75rem]">
  <img src={logoPreta} alt="Logo Rota" className="w-[2.5rem] h-[2.5rem] object-contain" />
</div>

            <p className="text-brand-paragraph text-[1rem] leading-relaxed">
              Desenhe conexões reais que transformam cada quilômetro em felicidade.
            </p>
          </div>

          {/* App Section - Desktop Only (Alterado para flex-col) */}
          <div className="hidden lg:flex flex-col items-end gap-[1rem]">
            <span className="text-brand-black font-bold text-[0.875rem]">Get the app</span>
            <div className="flex flex-col gap-[0.75rem]">
              <a href="#" className="transition-transform hover:scale-105">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-[2.5rem] w-auto"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-[2.5rem] w-auto"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-[1.5rem] md:gap-[2.5rem] mb-[3rem]">
          <a href="#" className="text-brand-paragraph font-bold text-[1rem] hover:text-brand-black transition-colors">hero</a>
          <a href="#" className="text-brand-paragraph font-bold text-[1rem] hover:text-brand-black transition-colors">novas memórias</a>
          <a href="#" className="text-brand-paragraph font-bold text-[1rem] hover:text-brand-black transition-colors">comunidade</a>
          <a href="#" className="text-brand-paragraph font-bold text-[1rem] hover:text-brand-black transition-colors">funcionalidades</a>
          <a href="#" className="text-brand-paragraph font-bold text-[1rem] hover:text-brand-black transition-colors">passos</a>
          <a href="#" className="text-brand-paragraph font-bold text-[1rem] hover:text-brand-black transition-colors">baixe agora</a>
        </div>

        {/* App Section - Mobile Only (Alterado para flex-col) */}
        <div className="flex lg:hidden flex-col items-start gap-[1rem] mt-[2rem]">
          <span className="text-brand-black font-bold text-[0.875rem]">Get the app</span>
          <div className="flex flex-col gap-[1rem]">
            <a href="#" className="transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on App Store" 
                className="h-[2.2rem] w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-[2.2rem] w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};