import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import spotify from '../assets/spotify.svg';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Form } from "./Form";

export function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Tempo da animação em milissegundos
  }, []);




  return (
    <section id="contact" className="flex flex-col md:flex-row items-start justify-center bg-[#0b0b0b] py-8 overflow-x-hidden">
      <article className=" border-white md:w-1/2 flex flex-col gap-12 pl-8 lg:pl-48" data-aos="fade-right">
        <h2 className="font-poppins font-medium text-6xl text-[#ededed] w-2/4" >Entre em contato!</h2>
        <div className="flex flex-col gap-2">
          <a href="mailto:contato@site.com" target="_blank" className="flex items-center gap-1 w-fit">
            <AiOutlineMail color='#522cba' fontSize={20} className="font-bold" />
            <span className="font-roboto font-medium text-white">
              contato@site.com
            </span>
          </a>
          <a href="mailto:contato@site.com" target="_blank" className="flex items-center gap-1 w-fit">
            <AiOutlineLinkedin color='#522cba' fontSize={20} className="font-bold" />
            <span className="font-roboto font-medium text-white">
              LinkedIn
            </span>
          </a>
          <a href="mailto:contato@site.com" target="_blank" className="flex items-center gap-1 w-fit">
            <AiOutlineGithub color='#522cba' fontSize={20} className="font-bold" />
            <span className="font-roboto font-medium text-white">
              GitHub
            </span>
          </a>
          <a href="mailto:contato@site.com" target="_blank" className="flex items-center gap-1 w-fit">
            <AiOutlineInstagram color='#522cba' fontSize={20} className="font-bold" />
            <span className="font-roboto font-medium text-white">
              Instagram
            </span>
          </a>
        </div>
        <div className="-ml-4">
          <img src={spotify} alt="" />
        </div>
      </article>
      <Form/>
    </section>
  )
}