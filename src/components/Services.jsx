import { useEffect,  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import card from '../assets/servicesCard.svg'
import { AiOutlineMobile, AiOutlineLaptop } from "react-icons/ai";
import { PiPaintBrushBroad } from "react-icons/pi";


export function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Tempo da animação em milissegundos
  }, []);
  return (
    <section className="overflow-x-hidden flex flex-col items-center justify-start px-8 py-4 gap-8 bg-[#191919]" id="services">
      <h2 className="text-[#2d2d2d] text-3xl md:text-4xl lg:text-5xl font-medium font-poppins leading-[30px] mt-4 text-center">Soluções para seu projeto</h2>
      <article className="flex flex-wrap gap-8 justify-center">
        {[
          {
            "title": "Flexível para mobile",
            "description": "Desenvolvo interfaces adaptáveis para todos os dispositivos, garantindo uma experiência fluida em celulares, tablets e desktops.",
            "Icon": AiOutlineMobile
          },
          {
            "title": "Interfaces Modernas",
            "description": "Criação de layouts modernos e interativos, utilizando tecnologias atuais para um design atraente e funcional.",
            "Icon": AiOutlineLaptop
          },
          {
            "title": "Design de Interfaces",
            "description": "Projetos visuais intuitivos e bem estruturados, focados na usabilidade e na identidade visual do seu site ou aplicação.",
            "Icon": PiPaintBrushBroad
          }
        ].map((element, index) => {
          const Icon = element.Icon;
          return (
            <div className="relative" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} key={index}>
              <img src={card} alt="" className="w-[19rem]" />
              <div className="absolute inset-0 flex flex-col text-white items-center justify-center gap-12 h-4/5 py-14">
                <div className=" mx-auto  flex items-center justify-center gap-4">
                  <Icon size={70} color="#404040" />
                  <h3 className="font-poppins font-semibold w-25 sm:w-40 text-[1.125rem]">{element.title}</h3>
                </div>
                <div className="w-4/5 mx-auto mr-4">
                  <p>{element.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </article>
    </section>
  )
}