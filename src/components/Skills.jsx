import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-background overflow-hidden overflow-x-visible">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div>
            <div className="font-label text-xs tracking-[0.2em] text-primary mb-6 uppercase">02 // ARSENAL</div>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">TECH STACK</h2>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-1"
        >
          {/* Skill Card 1 */}
          <motion.div variants={itemVariants} className="bg-surface-container p-10 hover:bg-surface-container-high transition-all duration-300 group relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <span className="material-symbols-outlined text-4xl text-primary mb-8">code</span>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">REACT & FRONTEND</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Interfaces de usuário interativas, responsividade impecável e metodologias modernas.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">REACT.JS</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">JAVASCRIPT</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">HTML5/CSS3</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">BOOTSTRAP</span>
            </div>
          </motion.div>
          
          {/* Skill Card 2 */}
          <motion.div variants={itemVariants} className="bg-surface-container p-10 hover:bg-surface-container-high transition-all duration-300 group relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <span className="material-symbols-outlined text-4xl text-primary mb-8">precision_manufacturing</span>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">AUTOMATION & DATA</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Automação de negócios com RPA, Web Scraping, extração de dados e processamento inteligente para otimização de tempo.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">UIPATH (RPA)</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">WEB SCRAPING</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">AUTO: PLANILHAS & PDF</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">AUTO: EMAIL E WHATSAPP</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">SQL SERVER / MYSQL</span>
            </div>
          </motion.div>

          {/* Skill Card 3 */}
          <motion.div variants={itemVariants} className="bg-surface-container p-10 hover:bg-surface-container-high transition-all duration-300 group relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <span className="material-symbols-outlined text-4xl text-primary mb-8">terminal</span>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">BACKEND & DEVOPS</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">Arquitetura robusta, conteinerização de serviços e versionamento com as tecnologias mais consolidadas.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">NODE.JS</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">PYTHON</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">C# & .NET</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">DOCKER</span>
              <span className="px-3 py-1 bg-surface-container-highest text-[10px] tracking-tighter font-label text-on-surface-variant rounded-sm">GIT/GITHUB</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
