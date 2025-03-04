import React, { useState } from 'react';
import mira from '../assets/mira.svg';
import logo from '../assets/logo.svg';
import { motion } from "framer-motion";

export function Navbar() {
  const [active, setActive] = useState(false); // Menu começa oculto

  // Função que lida com o clique do menu


  return (
    <nav className=' h-20 relative flex items-center justify-between px-4'>
      {/* Logo */}
      <div className='h-2/4 z-50 opacity-50 md:ml-8'>
        <a href="#">
          <img className='h-full' src={logo} alt="Logo" />

        </a>
      </div>

      {/* Menu Hamburger (Botão) */}
      <button onClick={() => setActive(prev => !prev)} className="relative flex flex-col justify-between w-8 h-6 md:hidden z-50">
        <motion.div
          animate={active ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
          className="h-1 w-8 bg-white rounded"
        />
        <motion.div
          animate={active ? { opacity: 0 } : { opacity: 1 }}
          className="h-1 w-8 bg-white rounded"
        />
        <motion.div
          animate={active ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          className="h-1 w-8 bg-white rounded"
        />
      </button>

      {/* Links do Menu */}
      <div
        className={`absolute top-0 z-49 left-0 w-full md:bg-transparent bg-[#0d0d0d] h-screen flex flex-col justify-center items-center gap-12 md:sticky md:w-auto md:h-auto md:flex-row md:flex transition-all duration-300 ${active ? 'flex' : 'hidden'}`}
      >
        {[{ title: 'Sobre', link: '#about' }, { title: 'Serviços', link: '#services' }, { title: 'Habilidades', link: '#skills' }, { title: 'Projetos', link: '#projects' }, { title: 'Contato', link: '#contact' }].map((item, index) => (
          <div key={index} className='group'>
            <div className='flex gap-2'>
              <img className='md:hidden ' src={mira} alt="Ícone" />
              <a href={item.link} className='font-poppins text-white text-2xl md:text-[1.25rem]'>{item.title}</a>
            </div>
            <div
              className="h-0.5 w-0 bg-gray-200 rounded-full mx-auto group-hover:w-full transition-all duration-300"
            ></div>
          </div>
        ))}
      </div>
    </nav >
  );
}
