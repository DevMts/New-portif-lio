import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Tempo da animação em milissegundos
  }, []);

  return (
    <section className="skills flex py-16 bg-[#0e0e0e]  justify-center items-center gap-16 md:gap-32 flex-wrap px-4" id="skills">
      <article className="lg:w-1/3  " data-aos="fade-right">
      <div>
        <h3 className="font-poppins font-semibold text-white text-4xl mb-4">Tecnologias que domino</h3>
        <p className="font-roboto text-gray-200 indent-0.5">
        Tenho experiência em diversas tecnologias que me permitem criar soluções completas para a web. Com <span className="font-bold text-[#7962DB]">HTML</span>, <span className="font-bold text-[#7962DB]">CSS</span> e <span className="font-bold text-[#7962DB]">JavaScript</span>, consigo desenvolver desde a estrutura até a interatividade de sites e aplicações. Uso <span className="font-bold text-[#7962DB]">TypeScript</span> para tornar o código mais robusto e fácil de manter. Para versionamento de código, utilizo <span className="font-bold text-[#7962DB]">Git</span>, garantindo controle e colaboração eficientes. Também trabalho com frameworks e bibliotecas como <span className="font-bold text-[#7962DB]">Bootstrap</span> e <span className="font-bold text-[#7962DB]">Tailwind CSS</span>, que facilitam o desenvolvimento de interfaces responsivas e atraentes. Além disso, utilizo <span className="font-bold text-[#7962DB]">React</span> para criar interfaces dinâmicas e reutilizáveis, melhorando a experiência do usuário. No design e prototipação, faço uso do <span className="font-bold text-[#7962DB]">Figma</span> para planejar e estruturar layouts eficientes antes da implementação.
        </p>
      </div>
      </article>
      <article data-aos="fade-left" className=" p-8 md:p-16">
        <div className="ring ">
          <i></i>
          <i></i>
          <i></i>
          <div className="text-white relative flex flex-wrap gap-4 w-4/5 mb-35">
            <FaHtml5 color="#E34F26" size={50} className="absolute top-35 left-42 elemento" style={{ animationDelay: "0.1s" }} />
            <FaJs color="#F7DF1E" size={50} className="absolute top-20 left-40 elemento" style={{ animationDelay: "0.2s" }} />
            <FaCss3 color="#1572B6" size={50} className="absolute top-30 left-23 elemento" style={{ animationDelay: "0.3s" }} />
            <FaSass color="#CC6699" size={50} className="absolute top-25 left-10 elemento" style={{ animationDelay: "0.4s" }} />
            <BiLogoTypescript color="#3178C6" size={50} className="absolute top-10 left-27 elemento" style={{ animationDelay: "0.5s" }} />
            <BiLogoTailwindCss color="#38B2AC" size={50} className="absolute top-10 elemento" style={{ animationDelay: "0.6s" }} />
            <FaBootstrap color="#7952B3" size={50} className="absolute left-52 elemento" style={{ animationDelay: "0.7s" }} />
            <FaReact color="#61DAFB" size={50} className="absolute -top-10 left-13 elemento" style={{ animationDelay: "0.8s" }} />
            <FaFigma color="#F24E1E" size={50} className="absolute -top-10 left-33 elemento" style={{ animationDelay: "0.9s" }} />
          </div>
        </div>
      </article>
    </section>
  )
}