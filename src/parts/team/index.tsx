import React from "react";
import Section from "@components/section";

export default function Team(){

  return(
    <Section className="w-full bg-motion-back"  title="team">
          <h1 className="text-center md:text-6xl text-4xl">Nosso Time</h1>

          <div className="flex flex-wrap justify-center items-center p-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col items-center justify-center p-4">
              <img
                className="w-28 h-28 rounded-full mb-4"
                src="https://avatars.githubusercontent.com/u/35300523?v=4&size=auto"
                alt="Membro da equipe 1"
              />
              <div className="text-center">
                <div className="font-bold text-xl mb-2">Iuri Ramos</div>
                <p className="text-gray-400 text-base">
                  CEO
                </p>
                <p className="text-gray-700 text-base">
                  Formado em Análise e Desenvolvimento de sistemas e Pós Graduado em Segurança da Informação
                  
                </p>
              </div>
            </div>
          </div>

        </Section>
  )
}