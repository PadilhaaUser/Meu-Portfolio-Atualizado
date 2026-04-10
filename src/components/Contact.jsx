import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-40 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h2 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white mb-12 uppercase leading-none">
              READY TO<br/>AUTOMATE?
          </h2>
          <div className="flex flex-col items-center gap-8">
            <p className="font-body text-on-surface-variant text-xl max-w-xl">
                Buscando soluções robustas e automação eficiente? Entre em contato e vamos conversar.
            </p>
            <a href="https://wa.me/5541984840223?text=Olá%20Paulo,%20vim%20pelo%20seu%20portfólio!" target="_blank" rel="noreferrer" className="group px-12 py-6 bg-primary text-on-primary font-headline font-bold drop-shadow-md md:text-2xl rounded-sm hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 hover:shadow-[0_0_20px_rgba(255,214,0,0.4)]">
                GET IN TOUCH
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0e0e0e] border-t border-zinc-900 w-full py-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 px-12 max-w-7xl mx-auto font-['Inter'] text-[0.75rem] tracking-[0.1em] uppercase"
        >
          <div className="text-[#FFD600] font-bold">
              RPA & FULLSTACK DEVELOPER
          </div>
          <div className="text-zinc-500">
              © 2026 DESIGNED BY PAULO PADILHA, TODOS OS DIREITOS RESERVADOS
          </div>
          <div className="flex gap-10">
            <a className="text-zinc-500 hover:text-[#FFD600] transition-colors hover:-translate-y-0.5" href="https://github.com/PadilhaAUser" target="_blank" rel="noreferrer">GITHUB</a>
            <a className="text-zinc-500 hover:text-[#FFD600] transition-colors hover:-translate-y-0.5" href="https://www.linkedin.com/in/padilha-dev" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a className="text-zinc-500 hover:text-[#FFD600] transition-colors hover:-translate-y-0.5" href="https://www.instagram.com/opaulopadilha" target="_blank" rel="noreferrer">INSTAGRAM</a>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
