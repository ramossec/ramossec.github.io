import React from "react"
import Section from "@components/section";

export default function Formulario(submit:any){
  return (
<Section
          className=" bg-cyan-800 py-28 container mx-auto"
          title="contact-form"
        >
          <h2 className="md:text-4xl p-20 text-center text-white font-bold md:text-wrap">
            Pronto para revolucionar seu negócio?
          </h2>
          <form onSubmit={submit}>
            <div className="flex md:flex-row flex-col items-center justify-center h-full gap-4">
              <input
                type="text"
                name="nome"
                className="p-4 md:w-96 w-80 h-12 rounded-lg"
                placeholder="Nome"
              />
              <input
                type="text"
                name="email"
                className="p-4 md:w-96 w-80 h-12 rounded-lg"
                placeholder="Digite seu melhor e-mail"
              />
              <input
                type="text"
                name="whatsapp"
                className="p-4 md:w-96 w-80 h-12 rounded-lg"
                placeholder="Digite seu whatsapp"
              />
              <input
                type="submit"
                value="Enviar"
                className=" bg-slate-500 p-4 rounded-lg text-white hover:bg-slate-800 hover:cursor-pointer "
              />
            </div>
          </form>
        </Section>

  );
}