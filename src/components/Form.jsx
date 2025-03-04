import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaClosedCaptioning } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  emailjs.init("8LobP2lQyowuVsw3i");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const onSubmit = (data) => {

    const formData = {
      name: data.name,
      email: data.email,
      message: data.message
    };

    const serviceID = 'service_tealnxo';
    const templateID = 'template_8h1n8zc'

    emailjs.send(serviceID, templateID, formData)
      .then((response) => {
        alert("Mensagem enviada com sucesso!");
        handleOpen()
      })
      .catch((error) => {
        alert("Erro ao enviar mensagem. Tente novamente.");
      });
  };


  return (



    <form className="w-full md:flex-[1] flex flex-col gap-7  border-white h-full pt-4" data-aos="fade-left" onSubmit={handleSubmit(onSubmit)} >
      <div className="flex flex-col ">
        <input
          type="text"
          className="mx-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded bg-[#191919] w-4/5 max-w-[50rem] h-12 placeholder:text-[#9c9c9c] placeholder:font-poppins pl-4 text-white"
          placeholder="Nome"
          {
          ...register("name", {
            required: "O campo precisa ter no mínimo 2 caracteres",
            minLength: 2,
            maxLength: 50
          })}
        />
        <span className="text-red-500 text-[0.625rem] pl-19 pt-1 font-semibold font-roboto">
          <ErrorMessage errors={errors} name="name" className='text-red-500' />
        </span>
      </div>
      <div className="flex flex-col ">
        <input
          type="text"
          className="mx-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded bg-[#191919] w-4/5 max-w-[50rem]  h-12 placeholder:text-[#9c9c9c] placeholder:font-poppins pl-4 text-white"
          placeholder="Email"
          {
          ...register("email", {
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido" },
            required: "O campo precisa ter no mínimo 2 caracteres",
            minLength: 2,
            maxLength: 50
          })}
        />
        <span className="text-red-500 text-[0.625rem] pl-19 pt-1 font-semibold font-roboto">
          <ErrorMessage errors={errors} name="email" className='text-red-500' />
        </span>
      </div>
      <div className="flex flex-col ">
        <textarea
          type="text"
          className="resize-none h-40 pt-4 mx-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded bg-[#191919] w-4/5 max-w-[50rem]  placeholder:text-[#9c9c9c] placeholder:font-poppins pl-4 text-white"
          placeholder="Message"
          {
          ...register("message", {
            required: "O campo precisa ter no mínimo 2 caracteres",
            minLength: 2,
            maxLength: 500
          })}
        />
        <span className="text-red-500 text-[0.625rem] pl-19 pt-1 font-semibold font-roboto">
          <ErrorMessage errors={errors} name="message" className='text-red-500' />
        </span>
      </div>
      <button type="submit" className="bg-gradient-to-l from-[#522cba] to-[#754fdb] hover:bg-gradient-to-l hover:from-[#3f1f97] hover:to-[#6342b3] w-30 -mt-4 h-12 rounded text-[#edd9ff] font-poppins font-semibold mx-auto cursor-pointer">Enviar</button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box >
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fadeIn">
              <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-[90%] max-w-md text-white relative">
                {/* Botão de Fechar */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 rounded-full bg-[#522cba] hover:bg-[#6a2cba] size-8 flex justify-center items-center transition"
                  aria-label="Fechar modal"
                >
                  <IoClose size={24} className="text-white" />
                </button>

                {/* Conteúdo do Modal */}
                <h2 className="text-xl font-bold font-roboto text-center">Obrigado por enviar seu e-mail!</h2>
                <p className="text-gray-300 text-center mt-2">Entraremos em contato o mais rápido possível.</p>

              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </form>
  )

}