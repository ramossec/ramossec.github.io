import React from 'react'
import Section from "../../components/section";

export default function Depoimentos(){
  const testimonials = [
    {
      name: "João Silva",
      role: "CEO da TechInova",
      image: "https://i.pravatar.cc/300?img=12",
      text: "A RamosSec transformou completamente nossa infraestrutura de TI. A segurança e eficiência de nossos sistemas melhoraram significativamente. Recomendo seus serviços sem hesitação!"
    },
    {
      name: "Maria Santos",
      role: "Diretora de Marketing da WebSolutions",
      image: "https://i.pravatar.cc/300?img=5",
      text: "As campanhas de marketing digital desenvolvidas pela RamosSec superaram todas as nossas expectativas. Nosso ROI aumentou em 150% em apenas três meses. Uma parceria incrível!"
    },
    {
      name: "Carlos Mendes",
      role: "CTO da InovaTech",
      image: "https://i.pravatar.cc/300?img=3",
      text: "A expertise da RamosSec em desenvolvimento web e mobile é impressionante. Eles entregaram um produto final que não só atendeu, mas superou nossas especificações. Estamos ansiosos para futuros projetos juntos."
    }
  ];

  return(
    <Section
      className="w-full container mx-auto justify-center py-28"
      title="depoiments"
    >
      <h1 className="text-center md:text-6xl text-4xl mb-12">Depoimentos</h1>
      <div className="flex flex-wrap justify-center items-stretch p-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-sm w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg m-4 flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-50 cursor-pointer">
            <img
              className="w-28 h-28 rounded-full mb-4 border-4 border-blue-500"
              src={testimonial.image}
              alt={`Depoimento de ${testimonial.name}`}
            />
            <div className="text-center">
              <div className="font-bold text-xl mb-2">{testimonial.name}</div>
              <div className="text-blue-600 text-sm mb-4">{testimonial.role}</div>
              <p className="text-gray-700 text-base italic">
                "{testimonial.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}