import { Navbar } from "./NavBar";
import { useTypingText } from "./useTypingText";

import videoBg from '../assets/background.webm';

export function Header() {
  const { word } = useTypingText(
    ["Dev. front-end", "UI Design"],
    130,
    20
  );

  return (
    <header className="w-full min-h-screen relative" id="start">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="w-full h-full gradient absolute top-0 left-0">

      </div>

      <Navbar />

      <article className="font-orbitron flex flex-col justify-center items-center w-full min-h-[calc(100dvh-5rem)] text-white">
        <span className="text-2xl md:text-3xl lg:text-4xl text-gray-200">Eu sou</span>
        <span className="text-4xl z-40 md:text-6xl lg:text-8xl mb-20 relative after:content-[''] after:w-0.5 after:h-full after:bg-gray-500 after:block after:absolute after:right-[-10px] after:top-0 after:animate-[blink_0.5s_ease_infinite_alternate-reverse]">{word}</span>
      </article>
    </header>
  );
}
