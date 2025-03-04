
export function Footer() {
  return (
    <footer>
      <section className="bg-black flex gap-8 md:flex-row flex-col justify-evenly items-center md:items-start py-16 px-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-[#ededed]  font-medium font-poppins text-xl">Navegação</h4>
          {["Sobre Mim", "Serviços", "Habilidades", "Projetos", "Contato"].map(elemento => {
            return (
              <span className=" text-gray-400 font-semibold font-roboto text-center md:text-left"  >{elemento}</span>
            )
          })}
        </div>
        <div>
          <h4 className="text-[#ededed]  font-medium font-poppins text-xl text-center md:text-left">Contato</h4>
          <a href="mailto:mateuscarvalhon2@gmail.com" className=" text-gray-400 font-semibold font-roboto">mateuscarvalhon2@gmail.com</a>
        </div>
        <div>
          <h4 className="text-[#ededed]  font-medium font-poppins text-xl">Receba Notificações</h4>
          <input type="email" placeholder="Seu e-mail" className="bg-[#111111] rounded-lg p-2 w-72 placeholder:text-gray-400 " />
          <button className="w-72 bg-[#3c3b3b] mt-1 rounded text-gray-100 py-1.5 block">Inscreva-se</button>

        </div>
      </section>
      <article className="flex flex-col items-center justify-center py-4 h-28 w-full bg-black border-t-gray-400/50 border-t text-gray-300">
          <span>© 2023 Mateus. Todos os direitos reservados.</span>
          <a href='#start'>Voltar ao topo</a>
      </article>
    </footer>
  )
}