import React from "react";
import Section from "@components/section";
import { Time } from "@types"


interface TeamProps {
  equipe: Time; // Ensure this matches the expected structure
}

const Team: React.FC<TeamProps> = ({ equipe }) => {
  return (
    <Section className="py-28 container mx-auto" title="team">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-12 text-blue-700 font-bold">Nosso Time</h1>

      <div className="flex flex-wrap justify-center items-stretch px-4 sm:px-6 md:px-8 lg:px-10">
        {equipe?.map((colaborador, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <div className="h-full rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-6 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50">
              <img
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mb-6 border-4 border-blue-500 transition-transform duration-300 hover:scale-110"
                src={colaborador.imagem}
                alt={colaborador.nome}
              />
              <div className="text-center">
                <div className="font-bold text-xl sm:text-2xl mb-2 text-blue-700">{colaborador.nome}</div>
                <p className="text-blue-600 text-base sm:text-lg mb-2">
                  {colaborador.cargo}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  {colaborador.formacao}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Team;
