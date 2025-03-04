import React from "react";
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Imac({ dates }) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Tempo da animação em milissegundos
  }, []);

  return (
    <div className="flex justify-between flex-row relative" data-aos={dates.id % 2 === 0 ? "fade-left" : "fade-right"}>
      <div>
        {/* Corpo do iMac */}
        <div className="w-[20rem] h-[13.2rem] md:w-[31.25rem] md:h-[20.625rem] bg-[#A2A2A2] rounded-xl flex mx-auto shadow-lg">
          <div className="w-[20rem] h-[10.8rem] md:w-[31.25rem] md:h-[16.875rem] bg-white" style={{ borderRadius: "0.625rem 0.625rem 0 0" }}>
            {/* Câmera */}
            <div className="bg-[#3A3A3A] h-1.5 w-1.5 rounded-full my-[0.3125rem] mx-auto"></div>
            {/* Tela */}
            <div className="w-[18.8rem] h-[9.6rem] md:w-[29.375rem] md:h-[15rem] border-[#D6D6D6] border-[1px] border-solid mx-auto rounded-lg">
              <img className="h-[9.6rem] w-[18.8rem] md:h-[15rem] md:w-[29.375rem] object-cover rounded-lg" src={dates.image} alt="Wallpaper" />
            </div>
          </div>
        </div>

        {/* Stand (suporte) */}
        <div className="stand w-[3.5rem] h-[2rem] md:w-[5rem] md:h-[3rem] bg-[#B8B8B8] mx-auto mt-[-0.5rem] rounded-b-lg shadow-md"></div>

        {/* Base */}
        <div className="base w-[6rem] h-[0.5rem] md:w-[8rem] md:h-[0.75rem] bg-[#B8B8B8] mx-auto mt-[0.25rem] rounded-lg shadow-md"></div>
      </div>

      <div className="absolute top-70 md:mt-4 md:top-full  left-0 w-full h-1/5 bg-red/90 flex flex-col justify-center items-center gap-2">
        <h3 className="font-roboto text-2xl text-white mt-2">{dates.title}</h3>
        <div className="flex justify-center items-center gap-4">
          <a href={dates.github} className="px-4 py-2 text-white text-[1.25rem] font-semibold font-poppins bg-black rounded-full flex justify-center items-center gap-2 hover:bg-[#1e1d1d]">
            <FaGithub />
            GitHub
          </a>
          <a href={dates.deploy} className="px-4 py-2 text-white text-[1.25rem] font-semibold font-poppins bg-[#522cba] rounded-full flex justify-center items-center gap-2 hover:bg-[#1e1d1d]">
            <GrDeploy />
            Prévia
          </a>
        </div>
      </div>
    </div >
  );
};

