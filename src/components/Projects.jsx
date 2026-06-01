import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Alphap Imóveis - Landing Page',
      desc: 'Projeto real (freelancer) desenvolvido para focar em SEO, responsividade e conversão.',
      techs: ['HTML', 'CSS', 'JAVASCRIPT', 'NETLIFY'],
      img: '/AlphapImoveis.webp',
      link: 'https://alphapimoveis.netlify.app/'
    },
    {
      title: 'Sistema de Gerenciamento CRUD',
      desc: 'Aplicação web simulando um sistema administrativo simples para pequenos negócios, com banco de dados no Google Firebase.',
      techs: ['JAVASCRIPT', 'HTML', 'CSS', 'FIREBASE'],
      img: '/fotoCRUD.png',
      link: 'https://padilhaauser.github.io/CRUD/'
    },
    {
      title: 'Projeto CineCore',
      desc: 'O Projeto CineCore é uma plataforma interativa para descoberta de filmes e séries, integrada às APIs do TMDB e OMDb. Desenvolvido com uma arquitetura moderna utilizando React e Node.js.',
      techs: ['REACT', 'NODE.JS', 'APIs'],
      img: '/CineCore.webp',
      link: 'https://cine-core.vercel.app'
    },
    {
      title: 'Django Blog',
      desc: 'Blog em Django com posts, comentários, categorias, login e painel administrativo. SQLite local e PostgreSQL (Neon) em produção.',
      techs: ['DJANGO', 'PYTHON', 'POSTGRESQL', 'RENDER'],
      img: '/fotoBlog.png',
      link: 'https://django-blog-ujh6.onrender.com/',
      objectFit: 'contain'
    },
    {
      title: 'Prova Técnica API Rest UserHUB',
      desc: 'Integração de dados assíncronos e requisição de APIs REST.',
      techs: ['HTML', 'CSS', 'JAVASCRIPT', 'APIs'],
      img: '/userHub.webp',
      link: 'https://padilhaauser.github.io/ProvaTecnica-UserHUB/'
    },
    {
      title: 'Formulário Cartão de Crédito',
      desc: 'Interface de pagamento com validação dinâmica e reflexo de dados em tempo real no cartão virtual.',
      techs: ['HTML', 'CSS', 'JS'],
      img: '/cartaoPagamento.webp',
      link: 'https://padilhaauser.github.io/formulario-cartao-credito/'
    },
    {
      title: 'Jogo da Memória',
      desc: 'Recriação interativa de um jogo de memória simples focado em manipulação do DOM.',
      techs: ['HTML', 'CSS', 'JS'],
      img: '/JogoMemoria.webp',
      link: 'https://padilhaauser.github.io/JogoDaMemoria-HtmlCssJS/'
    },
    {
      title: 'Calculador de Dígitos (CPF/CNPJ)',
      desc: 'Algoritmo avançado para cálculo e validação estruturada em retaguarda.',
      techs: ['C#', 'PYTHON', 'OOP'],
      img: '/Calculador.webp',
      link: 'https://github.com/PadilhaaUser/Projeto-de-Programacao-Orientada-a-Objetos'
    },
    {
      title: 'Jogo da Cobrinha',
      desc: 'Clássico jogo no terminal com manipulação de colisões e matrizes.',
      techs: ['C', 'TERMINAL'],
      img: '/SnakeGame.webp',
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
            03 // PROJECTS
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-white uppercase max-w-4xl"
        >
            MY PROJECTS
        </motion.h2>


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
              <div className={`w-full h-48 overflow-hidden relative flex-shrink-0 ${proj.objectFit === 'contain' ? 'bg-black/30' : ''}`}>
                 <img 
                   src={proj.img} 
                   alt={proj.title} 
                   className={`w-full h-full ${proj.objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'} grayscale-[0.8] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out`} 
                 />
                 {proj.objectFit !== 'contain' && (
                   <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent mix-blend-multiply"></div>
                 )}
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
