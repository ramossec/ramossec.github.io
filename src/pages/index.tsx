import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "@components/Header";
import Section from "@components/section/index";
import { supabase } from '@services/supabase'
import Depoimentos from '@parts/depoimentos/index';
import Formulario from "@parts/formulario";
import Team from "@parts/team";
const IndexPage: React.FC<PageProps> = () => {


  const Handlesubmit = async (event: any) => {
    event.preventDefault();
    let data = {
      name: event.target.nome.value,
      email: event.target.email.value,
      whatsapp: event.target.whatsapp.value,
      // whatsapp:event.target.whatsapp.value
    }
    // alert(JSON.stringify(data))
    // return console.log(supabase)
    try {
      const response = await supabase.from('clients').insert({
        name: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
      })

      event.target.nome.value = "";
      event.target.email.value = "";
      event.target.whatsapp.value = "";


      return alert("Contato Enviado com sucesso!!Em breve entraremos em contato");
    }
    catch (error) {

      return alert(error)

    }

  }

  return (
    <>
      <Header />
      <main className=" w-full min-h-screen container-lg mx-auto ">
        <Section className="py-48 px-4 bg-sky-700 container mx-auto bg-tech bg-cover">
          <h1 className="text-7xl text-white font-medium">RamosSec</h1>
          <h4 className="text-2xl text-white font-light">
            Transforme seu negócio com soluções digitais inovadoras e seguras
          </h4>
          {/* <button className="p-4 bg-cyan-600 text-bold font-semibold font-serif rounded-full my-5 text-gray-700 ">
            Saiba Mais
          </button> */}
        </Section>
        <Formulario submit={Handlesubmit} />
        <Depoimentos />
        <Team />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ramos Sec</title>;
