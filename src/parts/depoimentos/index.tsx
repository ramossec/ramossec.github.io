import React from 'react'
import Section from "../../components/section";



export default function Depoimentos(){

  return(
    <Section
    className="w-full container mx-auto justify-center py-28"
    title="depoiments"
  >
    <h1 className="text-center md:text-6xl text-4xl">Depoimentos</h1>

    <div className="flex flex-wrap justify-center items-center p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col items-center justify-center p-4">
        <img
          className="w-28 h-28 rounded-full mb-4"
          src="https://i.pravatar.cc/300"
          alt="Depoimento 1"
        />
        <div className="text-center">
          <div className="font-bold text-xl mb-2">Depoimento 1</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col items-center justify-center p-4">
        <img
          className="w-28 h-28 rounded-full mb-4"
          src="https://i.pravatar.cc/300"
          alt="Depoimento 2"
        />
        <div className="text-center">
          <div className="font-bold text-xl mb-2">Depoimento 2</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex flex-col items-center justify-center p-4">
        <img
          className="w-28 h-28 rounded-full mb-4"
          src="https://i.pravatar.cc/300"
          alt="Depoimento 3"
        />
        <div className="text-center">
          <div className="font-bold text-xl mb-2">Depoimento 3</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </Section>
  )

}