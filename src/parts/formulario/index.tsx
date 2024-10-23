import React from "react"
import Section from "@components/section";

export default function Formulario(submit: any) {
  return (
    <Section
      className="container mx-auto bg-motion-back p-8 md:p-12 rounded-xl shadow-lg"
      title="contact-form"
    >
      <h2 className="text-3xl md:text-4xl text-center text-white font-bold mb-8 md:mb-10">
        Pronto para revolucionar seu negócio?
      </h2>
      <form onSubmit={submit} className="max-w-md mx-auto">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="nome"
            className="w-full p-4 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Seu nome completo"
          />
          <input
            type="email"
            name="email"
            className="w-full p-4 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Seu melhor e-mail para contato"
          />
          <input
            type="tel"
            name="whatsapp"
            className="w-full p-4 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Seu WhatsApp com DDD (ex: 11 99999-9999)"
            pattern="\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}"
            title="Por favor, insira um número de WhatsApp válido no formato (99) 99999-9999"
            maxLength={15}
            onChange={(e) => {
              const x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
              if (x) { // Check if x is not null
                e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
              }
            }}
          />
          <input
            type="submit"
            value="Solicitar contato"
            className="w-full bg-blue-600 p-4 rounded-lg text-white font-semibold hover:bg-blue-700 cursor-pointer transition duration-300 transform hover:scale-105"
          />
        </div>
      </form>
    </Section>
  );
}