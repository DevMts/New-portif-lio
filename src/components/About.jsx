import perfil from '../assets/perfil.jpg'
import alvo from '../assets/alvo.svg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Tempo da animação em milissegundos
  }, []);

  return (
    <section className="about flex flex-col items-center justify-center md:gap-32 md:flex-row px-8 bg-[#030303] md:min-h-192 min-h-200 gap-12 overflow-x-hidden py-8" id='about'>
      <div className="flex flex-col" data-aos="fade-right">       <strong className="text-[1.125rem] md:text-[1.5rem] text-[#ededed] ">Mateus Carvalho</strong>
        <span className="text-[#9c9c9c] text-[1.125rem] font-medium font-roboto"> Desenvolvedor Front - End & UI Design</span>
        <p className="text-[1rem] max-w-[564px] text-[#ededed] mt-4">Curioso e apaixonado por desafios, estou sempre em busca de novas formas de criar, aprender e evoluir. Desde cedo, a tecnologia despertou meu interesse, e hoje sigo explorando possibilidades para transformar ideias em realidade. Acredito que cada detalhe faz a diferença, e é nisso que foco ao desenvolver qualquer projeto.</p>
      </div>
      <div className='iconPerfilContainer relative' data-aos="fade-left">
        <img src={alvo} className='absolute top-0 z-50' alt="" posit />
        <img className='iconPerfil mt-6' src={perfil} alt="" />
      </div>
    </section>
  )
}