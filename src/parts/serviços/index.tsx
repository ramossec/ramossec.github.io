import React from "react"
import Section from "@components/section";

export default function Servicos(){
  return (
    <Section title="services">

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold">Desenvolvimento Web</h3>
            </div>
            <p className="text-gray-600 text-sm">Criamos sites e aplicações web modernas e responsivas, utilizando as mais recentes tecnologias do mercado.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold">Desenvolvimento Mobile</h3>
            </div>
            <p className="text-gray-600 text-sm">Criamos aplicativos móveis intuitivos e eficientes para iOS e Android, impulsionando sua presença no mercado mobile.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-semibold">Segurança da Informação</h3>
            </div>
            <p className="text-gray-600 text-sm">Oferecemos soluções de segurança robustas para proteger seus dados e sistemas contra ameaças cibernéticas.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h3 className="text-xl font-semibold">Consultoria em TI</h3>
            </div>
            <p className="text-gray-600 text-sm">Fornecemos orientação especializada para otimizar seus processos de TI e impulsionar a eficiência do seu negócio.</p>
          </div>
         
          {/* <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <h3 className="text-xl font-semibold">Cloud Computing</h3>
            </div>
            <p className="text-gray-600 text-sm">Implementamos e gerenciamos soluções em nuvem para melhorar a escalabilidade e eficiência de sua infraestrutura de TI.</p>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-semibold">Análise de Dados</h3>
            </div>
            <p className="text-gray-600 text-sm">Utilizamos técnicas avançadas de análise de dados para fornecer insights valiosos e apoiar a tomada de decisões estratégicas.</p>
          </div> */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              <h3 className="text-xl font-semibold">Google Ads, Meta Ads e TikTok Ads</h3>
            </div>
            <p className="text-gray-600 text-sm">Gerenciamos campanhas de publicidade online nas principais plataformas para maximizar seu alcance e retorno sobre investimento.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <h3 className="text-xl font-semibold">Social Media</h3>
            </div>
            <p className="text-gray-600 text-sm">Desenvolvemos estratégias de mídia social personalizadas para aumentar o engajamento, a visibilidade da marca e o crescimento da comunidade online.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold">Design</h3>
            </div>
            <p className="text-gray-600 text-sm">Criamos designs visuais impactantes para sua marca, incluindo logotipos, materiais de marketing e interfaces de usuário para web e aplicativos móveis.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-semibold">Adequação à LGPD</h3>
            </div>
            <p className="text-gray-600 text-sm">Auxiliamos empresas na adequação à Lei Geral de Proteção de Dados, garantindo conformidade legal e proteção efetiva dos dados pessoais.</p>
          </div>
        </div>
      </div>
      
    </Section>
  )
}