"use client";
import Image from "next/image";
import { useState } from "react";
import { CatalogMovie } from "./catalogMovie";
import { AddMovieDrawer } from "../../components/drawer";
import { FilterModal } from "../../components/modalFilter";

export default function Movies() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalFilterOpen, setIsModalFilterOpen] = useState(false);

  return (
    <div className="bg-[#121113]">
      <div className="relative">
        <Image
          src="/bg-movies.png"
          alt="Background"
          className="object-cover z-0 h-[500px] w-full absolute inset-0"
          priority
          height={600}
          width={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121113]/80 via-[#121113]/90 to-[#121113] z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 text-white flex">
          <div className="flex flex-col gap-4 mb-8 ml-auto w-full sm:w-auto">
            <div className="flex sm:flex-row flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Pesquise por filmes"
                className="w-full sm:w-[20rem] px-4 py-2 rounded bg-[#2a2730] text-white outline-none"
              />

              <div className="flex flex-row gap-2 w-full sm:w-auto items-end sm:items-center">
                <button
                  onClick={() => setIsModalFilterOpen(true)}
                  className="px-4 py-2 w-full sm:w-auto bg-[#B744F7]/20 rounded hover:bg-[#B744F7]/40  transition cursor-pointer"
                >
                  Filtros
                </button>
                <button
                  className="px-4 py-2 w-full sm:w-[15rem] bg-primary rounded hover:bg-primary-hover transition cursor-pointer"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  Adicionar Filme
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <CatalogMovie />

          <div className="flex justify-center mt-10 mb-10 gap-2">
            <button className="bg-[#2a2730] px-3 py-1 rounded text-white">
              &larr;
            </button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`px-3 py-1 rounded ${
                  n === 3
                    ? "bg-[#a24be6] text-white"
                    : "bg-[#2a2730] text-gray-300"
                }`}
              >
                {n}
              </button>
            ))}
            <button className="bg-[#2a2730] px-3 py-1 rounded text-white">
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <AddMovieDrawer onOpenChange={setIsDrawerOpen} open={isDrawerOpen} />
      <FilterModal
        open={isModalFilterOpen}
        onOpenChange={setIsModalFilterOpen}
      />
    </div>
  );
}
