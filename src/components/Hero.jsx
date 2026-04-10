import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-6 md:px-12 bg-background">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,228,131,0.08)_0%,_rgba(14,14,14,1)_70%)] pointer-events-none z-0"></div>
      
      {/* CSS Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(#FFD600 1px, transparent 1px), linear-gradient(90deg, #FFD600 1px, transparent 1px)', 
          backgroundSize: '80px 80px', 
          backgroundPosition: 'center center' 
        }}
      ></div>
      
      {/* Fade Gradients for Grid */}
      <div className="absolute top-0 w-full h-[30vh] bg-gradient-to-b from-background to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-background to-transparent z-0 pointer-events-none"></div>
      <div className="absolute left-0 h-full w-[20vw] bg-gradient-to-r from-background to-transparent z-0 pointer-events-none"></div>
      <div className="absolute right-0 h-full w-[20vw] bg-gradient-to-l from-background to-transparent z-0 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full flex flex-col items-center text-center z-10 mt-10 md:mt-20"
      >
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#ffd600]"></span>
          <span className="font-label text-xs tracking-[0.2em] uppercase font-bold text-primary">Dev RPA & Eng. de Software</span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#ffd600]"></span>
        </div>
        
        <h1 className="font-headline text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.04em] leading-[0.9] mb-8 uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            PAULO <br className="md:hidden" /><span className="text-primary drop-shadow-[0_0_30px_rgba(255,214,0,0.3)]">PADILHA</span>
        </h1>
        
        <p className="font-headline text-lg md:text-2xl text-on-surface-variant mb-12 max-w-3xl leading-relaxed tracking-tight">
            Engenheiro de Software com foco em desenvolvimento web e <strong>automação de processos (RPA UiPath e Python)</strong>. Crio sistemas responsivos e robôs inteligentes que otimizam resultados, desde integrações web a extração massiva de dados.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <a href="#projects" className="px-8 py-4 bg-primary text-on-primary font-headline font-bold text-lg rounded-sm glow-soft transition-all hover:scale-105 active:scale-95 inline-block">
              VER MEUS PROJETOS
          </a>
          <a href="#contact" className="px-8 py-4 border border-outline-variant text-white font-headline font-bold text-lg rounded-sm hover:bg-white/5 hover:border-primary transition-all hover:scale-105 active:scale-95 inline-block">
              ENTRAR EM CONTATO
          </a>
        </div>

        {/* Tech Badges / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full border-t border-white/10 pt-12 mt-auto">
          <div className="flex flex-col items-center justify-center p-6 bg-white/[0.01] border border-white/5 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group">
            <span className="text-primary font-bold text-3xl mb-2 group-hover:scale-110 transition-transform">RPA</span>
            <span className="text-[10px] text-on-surface-variant tracking-[0.2em] font-label uppercase text-center">Automação Inteligente</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white/[0.01] border border-white/5 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group">
            <span className="text-primary font-bold text-3xl mb-2 group-hover:scale-110 transition-transform">Web</span>
            <span className="text-[10px] text-on-surface-variant tracking-[0.2em] font-label uppercase text-center">React, Node, Python</span>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white/[0.01] border border-white/5 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group">
            <span className="text-primary font-bold text-3xl mb-2 group-hover:scale-110 transition-transform">100%</span>
            <span className="text-[10px] text-on-surface-variant tracking-[0.2em] font-label uppercase text-center">Foco no Cliente</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative CSS Neon Lines */}
      <div className="absolute left-[5%] top-[30%] w-[1px] h-64 bg-gradient-to-b from-transparent via-primary/60 to-transparent"></div>
      <div className="absolute right-[5%] top-[50%] w-[1px] h-48 bg-gradient-to-b from-transparent via-primary/60 to-transparent"></div>
      <div className="absolute left-[15%] bottom-[10%] w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent hidden md:block"></div>
      <div className="absolute right-[15%] top-[20%] w-48 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent hidden md:block"></div>
    </section>
  );
}
