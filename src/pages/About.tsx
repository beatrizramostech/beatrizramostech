import React from "react";
import Header from "../components/Header";

const About: React.FC = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around min-h-vh min-w-full p-4">
        <div className="flex flex-col items-center lg:w-1/2 p-8">
          <h2 className="text-xl lg:text-2xl text-center lg:text-left text-white mb-4">
            Nossos Serviços:
          </h2>
          <div className="mt-8 flex flex-col text-white gap-4">

          <p className="text-white text-justify">
            A Beatriz Ramos Tech é uma empresa de tecnologia que surgiu em 2023 ao notar
            a necessidade de pessoas com soluções tecnológicas, manutenções
            corretivas e preventivas de computadores e notebooks, atualizações e
            restaurações de sistemas.
          </p>
          <p className="text-white text-justify">
            Logo, pequenas e médias empresas começaram a buscar pela expertise
            da Beatriz Ramos Tech e vimos uma necessidade de expandir para
            Gerenciamento de Mídias Socias, estratégias de Marketing Digital e
            desenvolvimento de aplicações.
          </p>
          <p className="mt-4 text-xs text-white">Beatriz Ramos</p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:w-1/2 p-8">
          <h2 className="text-xl lg:text-2xl text-center lg:text-left text-white mb-4">
            Nossos Números:
          </h2>
          <div className="mt-8 grid grid-cols-2 place-content-center text-center text-white gap-4">
          <div className="py-4">
            <p className="text-5xl font-bold">110%</p>
            <p className="mt-2">+ engajamento na mídias*</p>
          </div>
          <div className="py-4">
            <p className="text-5xl font-bold">68.5%</p>
            <p className="mt-2">+ contas alcançadas*</p>
          </div>
          <div className="py-4">
            <p className="text-5xl font-bold">23.7%</p>
            <p className="mt-2">+ seguidores*</p>
          </div>
          <div className="py-4">
            <p className="text-5xl font-bold">11.9%</p>
            <p className="mt-2">+ conversões em vendas*</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-white">*Média retirada de um período de 30 dias</p>
        </div>
      </div>
    </>
  );
};

export default About;
