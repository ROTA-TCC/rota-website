import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Badge } from './components/Badge';
import { Titles } from './components/Titles';
import { Gallery } from './components/Gallery';
import Grids from './components/Grids';
import { FeatureShowcase } from './components/FeatureShowcase';
import { StepArea } from './components/StepArea';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* Seção Principal / Hero */}

<section id="hero" className="w-full">
  <Navbar />
  <Hero />
</section>


      {/* Seção de Títulos e Conteúdo Central */}
      <section id="memorias" className="min-h-screen bg-brand-white flex flex-col items-center px-4">
        <nav className="w-full pt-30 pb-8 flex justify-center">
          <Badge text="novas memorias" />
        </nav>
        
        <Titles
          title="Encontre o Seu Próximo"
          spanTitle="Lugar Favorito"
          nextTitle="com segurança"
          description="Siga rotas personalizadas e descubra o mundo ao seu redor. Deixe o planejamento conosco e foque apenas em aproveitar cada nova parada."
        />
        
        <div className="w-full mt-8">
          <Gallery />
        </div>
        
                <nav id="comunidade" className="w-full py-8 flex justify-center">
          <Badge text="comunidade" />
        </nav>
        
        <Titles
          title = "faça parte do"
spanTitle = "movimento"
nextTitle = "que transforma"
description = "Mais que um app de corrida, uma rede viva de atletas. Troque experiências, descubra caminhos secretos sugeridos por outros corredores e celebre cada nova conquista com quem entende exatamente o esforço de cada passo."
        />
        <div className="w-full my-8">
          <Grids />
        </div>
      </section>

      {/* Vitrine de Funcionalidades */}
      <section id="funcionalidades" className="w-full">
                <nav className="w-full py-8 flex justify-center">
          <Badge text="funcionalidades" />
        </nav>
        
        <Titles
          title = "corra com "
spanTitle = "sua melhor versão"
nextTitle = ""
description = "Esqueça a rotina e sinta a liberdade de cada quilômetro. Com rotas feitas para o seu ritmo, você só precisa calçar o tênis e começar. O caminho a gente cuida para você."
        />
        <FeatureShowcase />
      </section>

      
      <div id="passos" className="w-full p-3 md:p-6 lg:p-8 my-8">
        <StepArea />
        </div>
        
     { /* Banner de Encerramento (Fundo Branco) */ }
     <section className="min-h-screen bg-white flex flex-col items-center justify-center my-8 p-3 md:p-6 lg:p-8">
        <Banner />
     </section>
     
     <div className="w-full mt-8">
        <Footer />
        </div>
    </main>
  );
}
