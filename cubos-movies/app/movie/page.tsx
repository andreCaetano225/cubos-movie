"use client";
import Image from "next/image";
import { useState } from "react";
import { AddMovieDrawer } from "../../components/drawer";
import { FilterModal } from "../../components/modalFilter";
import MovieDetailsCard from "./detailsMovie";
import { TrailerSection } from "./trailerMovie";

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

        <MovieDetailsCard />
        <TrailerSection />
      </div>

      <AddMovieDrawer onOpenChange={setIsDrawerOpen} open={isDrawerOpen} />
      <FilterModal
        open={isModalFilterOpen}
        onOpenChange={setIsModalFilterOpen}
      />
    </div>
  );
}
