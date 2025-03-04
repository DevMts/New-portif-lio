import { Imac } from "./ImacProject";
import capa from '../assets/capa.png'
import capa2 from '../assets/capa2.png'
import capa3 from '../assets/capa3.png'
import capa4 from '../assets/capa4.png'
import capa5 from '../assets/capa5.png'

export function Project() {

  const projects = [
    {
      'id': 1,
      'title': 'Imac Project',
      'github': 'https://github.com/rafaelrj/ImacProject',
      'deploy': 'https://imacproject.netlify.app',
      'image': capa
    },
    {
      'id': 2,
      'title': 'Project 2',
      'github': 'https://github.com/rafaelrj/Project2',
      'deploy': 'https://project2.netlify.app',
      'image': capa2
    },
    {
      'id': 3,
      'title': 'Project 3',
      'github': 'https://github.com/rafaelrj/Project3',
      'deploy': 'https://project3.netlify.app',
      'image': capa3
    },
    {
      'id': 4,
      'title': 'Project 4',
      'github': 'https://github.com/rafaelrj/Project4',
      'deploy': 'https://project4.netlify.app',
      'image': capa4
    },
    {
      'id': 5,
      'title': 'Project 5',
      'github': 'https://github.com/rafaelrj/Project5',
      'deploy': 'https://project5.netlify.app',
      'image': capa5
    }
  ]

  return (
    <section id="projects" className="bg-[#141414] flex  flex-col justify-center items-center gap-40 pb-32 overflow-x-hidden">
      <h2 className="text-[#2d2d2d] text-3xl md:text-4xl lg:text-5xl font-medium font-poppins leading-[30px] mt-4 -mb-32 text-center">Minhas Criações</h2>
      <article className="flex flex-wrap gap-40 items-center justify-center">
        {
          projects.map((project, index) => {
            return (
              <Imac dates={project} key={index} />
            )
          })}
      </article>
    </section>
  )
}