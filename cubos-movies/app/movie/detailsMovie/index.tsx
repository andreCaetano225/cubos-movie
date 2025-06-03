"use client";

import Image from "next/image";
import { BoxInfoMovie } from "../boxInfoMovie";
// import { CirclePoint } from "../../../components/circlePoint";

export default function MovieDetailsCard() {
  return (
    <div className=" text-white min-h-screen py-10 px-6 flex justify-center relative z-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <h1 className="text-4xl font-bold">Bumblebee</h1>
            <span className="text-sm text-gray-400">
              Título original: Bumblebee
            </span>
          </div>

          <Image
            src="/poster1.png"
            alt="Bumblebee"
            width={400}
            height={600}
            className="rounded"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-row  gap-4 h-[30rem]">
          <div className="flex flex-col gap-4 w-full justify-between">
            <p className="italic mt-2">Todo herói tem um começo.</p>

            <div className="bg-[#2a2730]/70 p-4 rounded w-[25rem]">
              <h2 className="text-lg font-semibold mb-1">SINOPSE</h2>
              <p className="text-gray-300 text-sm">
                “Bumblebee” é um filme que se passa em 1987 e conta a história
                de um Autobot chamado Bumblebee que encontra refúgio em um
                ferro-velho de uma pequena cidade praiana da Califórnia.
                Charlie, uma adolescente prestes a completar 18 anos, encontra
                Bumblebee machucado e sem condições de uso. Quando ela o revive,
                percebe que este não é qualquer fusca amarelo!
              </p>
            </div>

            <div className="bg-[#2a2730]/70 p-4 rounded w-[25rem]">
              <h2 className="text-lg font-semibold mb-1">Generos</h2>

              <div className="flex gap-2 flex-wrap mt-2">
                {["Ação", "Aventura", "Ficção Científica"].map((genre) => (
                  <span
                    key={genre}
                    className="bg-[#C150FF2E] text-sm px-3 py-1 rounded"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <div>
              <div className="flex gap-3">
                <BoxInfoMovie title="Popularidade" value={42.595} />
                <BoxInfoMovie title="Votos" value={42.595} />
                {/* <div className="relative group w-[300px] h-[400px] bg-gray-800 rounded overflow-hidden">
                  <CirclePoint rating={75} />
                </div> */}
              </div>
              <div className="flex gap-3 mt-4">
                <BoxInfoMovie title="Situação" value={42.595} />
                <BoxInfoMovie title="Idioma" value={42.595} />
              </div>
              <div className="flex gap-3 mt-4">
                <BoxInfoMovie title="Orçamento" value={42.595} />
                <BoxInfoMovie title="Receita" value={42.595} />
                <BoxInfoMovie title="Lucro" value={42.595} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
