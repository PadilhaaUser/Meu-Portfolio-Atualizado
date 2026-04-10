import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-surface-container-low px-6 md:px-12 border-y border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
      >
        <div className="relative">
          <div className="font-label text-xs tracking-[0.2em] text-primary mb-6 uppercase">01 // IDENTITY</div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white uppercase">
              SOBRE MIM.
          </h2>
          <div className="w-20 h-1 bg-primary mb-12"></div>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
              Sou um Engenheiro de Software em constante evolução, focado na intersecção entre <strong>desenvolvimento web e Automação de Processos Robóticos (RPA)</strong>. 
          </p>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
              Com sólida base na lógica de programação e experiência atuando como freelancer, desenvolvo soluções práticas para eliminação de atritos rotineiros. Meu foco abrange desde a criação de Landing Pages otimizadas e sistemas web complexos até a construção de bots autônomos para Web Scraping, extração de relatórios CSV, disparos de E-mail/WhatsApp e manipulação inteligente de PDFs.
          </p>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              Minha filosofia é clara: <em>software inteligente não apenas funciona, mas trabalha por você</em>. Atuo com resiliência para transformar tempo humano desperdiçado em processos digitalizados, entregando usabilidade, conversão e código estruturado.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-surface-container-low overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary z-10 opacity-50"></div>
            
            <img 
              src="/profile.jpg" 
              alt="Paulo Padilha - Software Engineer"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-6 left-6 font-label text-[10px] tracking-widest text-[#FFD600] uppercase z-10 bg-background/80 px-3 py-1 backdrop-blur-sm">
                SOFTWARE & AUTOMATION
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
