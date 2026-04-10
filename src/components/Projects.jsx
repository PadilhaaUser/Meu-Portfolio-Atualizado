import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Alphap Imóveis - Landing Page',
      desc: 'Projeto real (freelancer) desenvolvido para focar em SEO, responsividade e conversão.',
      techs: ['HTML', 'CSS', 'JAVASCRIPT', 'NETLIFY'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/AlphapImoveis-CU2hTOnt.webp',
      link: 'https://alphapimoveis.netlify.app/'
    },
    {
      title: 'Sistema de Gerenciamento CRUD',
      desc: 'Aplicação web simulando um sistema administrativo simples para pequenos negócios.',
      techs: ['JAVASCRIPT', 'HTML', 'CSS'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/CRUD-1I8RERXe.webp',
      link: 'https://padilhaauser.github.io/CRUD/'
    },
    {
      title: 'NewFlix v2',
      desc: 'Projeto de streaming responsivo recriado na versão mais recente.',
      techs: ['REACT', 'CSS', 'JS'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/NewFlix2-Bugcg4Z9.webp',
      link: 'https://padilhaauser.github.io/Projeto-Streaming-v2.0/'
    },
    {
      title: 'NewFlix v1',
      desc: 'Primeira versão do simulador de streaming focado em estilização básica.',
      techs: ['HTML', 'CSS', 'JS'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/NewFlix1-DaE7SHzh.webp',
      link: 'https://padilhaauser.github.io/Projeto-Streaming-v1.0/'
    },
    {
      title: 'Prova Técnica API Rest UserHUB',
      desc: 'Integração de dados assíncronos e requisição de APIs REST.',
      techs: ['HTML', 'CSS', 'JAVASCRIPT', 'APIs'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/UserHUB-DttxCFgW.webp',
      link: 'https://padilhaauser.github.io/ProvaTecnica-UserHUB/'
    },
    {
      title: 'Calculadora Formulário',
      desc: 'Formulário 3D moderno focado em UI e interatividade.',
      techs: ['HTML', 'CSS', 'JS'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/cartaoPagamento-DsH7oxHh.webp',
      link: 'https://padilhaauser.github.io/formulario-cartao-credito/'
    },
    {
      title: 'Jogo da Memória',
      desc: 'Recriação interativa de um jogo de memória simples focado em manipulação do DOM.',
      techs: ['HTML', 'CSS', 'JS'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/JogoMemoria-BGqby53h.webp',
      link: 'https://padilhaauser.github.io/JogoDaMemoria-HtmlCssJS/'
    },
    {
      title: 'Calculador de Dígitos (CPF/CNPJ)',
      desc: 'Algoritmo avançado para cálculo e validação estruturada em retaguarda.',
      techs: ['C#', 'PYTHON', 'OOP'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/Calculador-Da_rxx5U.webp',
      link: 'https://github.com/PadilhaaUser/Projeto-de-Programacao-Orientada-a-Objetos'
    },
    {
      title: 'Jogo da Cobrinha',
      desc: 'Clássico jogo no terminal com manipulação de colisões e matrizes.',
      techs: ['C', 'TERMINAL'],
      img: 'https://padilhaauser.github.io/Meu-Portfolio/assets/SnakeGame-tvaQCDY3.webp',
      link: 'https://github.com/PadilhaaUser/jogo-cobrinha'
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="font-label text-xs tracking-[0.2em] text-primary mb-6 uppercase"
        >
            03 // MECHANICS
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-16 text-white uppercase max-w-4xl"
        >
            INTELLIGENT WORKFLOW SYNCHRONIZATION
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1 }}
          className="w-full relative py-20 px-4"
        >
          {/* Conceptual Diagram */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
            {/* Step 1 */}
            <motion.div 
              initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-4 z-10 bg-background p-8 border border-outline-variant/20 rounded-lg w-full md:w-64"
            >
              <span className="material-symbols-outlined text-primary text-4xl">input</span>
              <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Data Ingest</div>
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block flex-grow h-[1px] bg-gradient-to-r from-primary/20 to-primary/20 relative origin-left"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#ffd600]"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}
              className="flex flex-col items-center gap-4 z-10 bg-background p-8 border border-outline-variant/20 rounded-lg w-full md:w-64 relative overflow-hidden"
            >
              <span className="material-symbols-outlined text-primary text-4xl relative z-10">settings_suggest</span>
              <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase relative z-10">RPA Engine</div>
              <div className="flex gap-1 relative z-10">
                <div className="w-3 h-3 bg-primary animate-pulse"></div>
                <div className="w-3 h-3 bg-primary animate-pulse" style={{ animationDelay: '200ms' }}></div>
                <div className="w-3 h-3 bg-surface-variant"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.3 }}
              className="hidden md:block flex-grow h-[1px] bg-gradient-to-r from-primary/20 to-primary/20 relative origin-left"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#ffd600]"></div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }}
              className="flex flex-col items-center gap-4 z-10 bg-background p-8 border border-outline-variant/20 rounded-lg w-full md:w-64"
            >
              <span className="material-symbols-outlined text-primary text-4xl">output</span>
              <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Autonomous Output</div>
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full"></div>
              </div>
            </motion.div>
          </div>
          {/* Abstract Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5" viewBox="0 0 1200 400">
            <path d="M0,200 Q300,50 600,200 T1200,200" fill="none" stroke="white" strokeWidth="1"></path>
            <path d="M0,220 Q300,70 600,220 T1200,220" fill="none" stroke="white" strokeWidth="1"></path>
          </svg>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-body text-on-surface-variant text-lg max-w-2xl mt-12 mb-24 leading-relaxed"
        >
            Meus projetos refletem o compromisso com automação e soluções web completas. De robôs que reduzem processos manuais complexos a plataformas com foco irrestrito em conversão e usabilidade.
        </motion.p>

        {/* Real Projects */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left"
        >
          {projects.map((proj, idx) => (
            <motion.a 
              variants={fadeUpVariant}
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={idx} 
              className="bg-surface-container-low group relative overflow-hidden flex flex-col transition-all duration-300 hover:bg-surface-container-highest min-h-[420px]"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-10"></div>
              <div className="w-full h-48 overflow-hidden relative flex-shrink-0">
                 <img src={proj.img} alt={proj.title} className="w-full h-full object-cover grayscale-[0.8] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                 <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent mix-blend-multiply"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase leading-tight">{proj.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.techs.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-background text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm border border-outline-variant/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
