import React from 'react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a1919]/60 backdrop-blur-[20px] border-b border-white/5 flex justify-between items-center px-6 md:px-12 py-4">
      <div className="text-lg md:text-xl font-black tracking-tighter text-[#FFD600] font-['Space_Grotesk'] uppercase">
          RPA & FULLSTACK DEVELOPER
      </div>
      <div className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] tracking-tighter uppercase">
          <a className="text-[#FFD600] border-b border-[#FFD600] pb-1 transition-all duration-300" href="#home">Home</a>
          <a className="text-zinc-400 font-medium hover:text-white transition-all duration-300" href="#about">Sobre</a>
          <a className="text-zinc-400 font-medium hover:text-white transition-all duration-300" href="#skills">Habilidades</a>
          <a className="text-zinc-400 font-medium hover:text-white transition-all duration-300" href="#projects">Projetos</a>
      </div>
      <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-[#FFD600] cursor-pointer active:scale-95 ease-in-out transition-all">terminal</span>
          <a href="/CV.pdf" target="_blank" rel="noreferrer" className="bg-primary text-on-primary px-5 py-2 font-['Space_Grotesk'] font-bold tracking-tighter uppercase rounded-sm hover:-translate-y-0.5 transition-all duration-300">
              DOWNLOAD CV
          </a>
      </div>
    </nav>
  );
}
