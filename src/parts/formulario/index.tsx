import React, { useState } from "react"
import Section from "@components/section";
import { supabase } from "@services/supabase";
import InputMask from 'react-input-mask';

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('clients')
        .insert([
          { 
            name: formData.nome,
            email: formData.email,
            whatsapp: formData.whatsapp // Remove caracteres não numéricos antes de salvar
          }
        ]);

      if(error) throw error;
      // Reset form after successful submission
      setFormData({ nome: "", email: "", whatsapp: "" });
      alert('Obrigado! Entraremos em contato em breve.');
    } catch (error:any) {
      console.error('Error submitting form:', error);
      switch(error.code){
        case '23505': alert('Email já cadastrado');break;
        default: alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');break;
      }
     
    }
  };

  return (
    <Section
      className="container mx-auto bg-motion-back p-8 md:p-12 rounded-xl shadow-lg"
      title="contact-form"
    >
      <h2 className="text-3xl md:text-4xl text-center text-white font-bold mb-8 md:mb-10">
        Pronto para revolucionar seu negócio?
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Seu nome completo"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Seu melhor e-mail para contato"
            required
          />
          <InputMask
            mask="(99) 99999-9999"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Seu WhatsApp com DDD (ex: 11 99999-9999)"
            required
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