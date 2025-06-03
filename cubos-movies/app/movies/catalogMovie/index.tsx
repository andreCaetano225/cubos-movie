import Link from "next/link";

export const CatalogMovie = () => {
  const movies = [
    {
      title: "BUMBLEBEE",
      subtitle: "Ação, Aventura, Ficção Científica",
      image: "./poster1.png",
      rating: 67,
    },
    {
      title: "CAPITÃ MARVEL",
      image: "./poster1.png",
    },
    {
      title: "ALITA: ANJO DE COMBATE",
      image: "./poster1.png",
      rating: 97,
    },
    {
      title: "COMO TREINAR O SEU DRAGÃO 3",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
    {
      title: "AQUAMAN",
      image: "./poster1.png",
    },
  ];

  return (
    <div className="relative bg-[#7D7D7E]/20 max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {movies.map((movie, index) => {
          const radius = 24;
          const stroke = 4;
          const normalizedRadius = radius - stroke * 2;
          const circumference = normalizedRadius * 2 * Math.PI;
          const strokeDashoffset =
            circumference - ((movie.rating || 0) / 100) * circumference;

          return (
            <Link href={"/movie"} key={index}>
              <div className="overflow-hidden relative group hover:scale-105 transition rounded-lg cursor-pointer">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover rounded-lg"
                />

                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10" />

                <div className="absolute bottom-0 left-0 w-full p-3 z-20 text-white">
                  <h3 className="text-sm font-bold uppercase">{movie.title}</h3>
                  {movie.subtitle && (
                    <p className="text-xs text-gray-300 mt-1">
                      {movie.subtitle}
                    </p>
                  )}
                </div>

                {movie.rating && (
                  <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <div className="relative w-full h-full">
                      <svg
                        className="absolute top-0 left-0 w-full h-full transform -rotate-90"
                        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                      >
                        <circle
                          stroke="#2a2730"
                          fill="transparent"
                          strokeWidth={stroke}
                          r={normalizedRadius}
                          cx={radius}
                          cy={radius}
                        />
                        <circle
                          stroke="#facc15"
                          fill="transparent"
                          strokeWidth={stroke}
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          r={normalizedRadius}
                          cx={radius}
                          cy={radius}
                          className="transition-all duration-500"
                        />
                      </svg>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[58.7px] sm:w-[117.7px] h-[58.7px] sm:h-[117.7px] rounded-full bg-black/70 flex items-center justify-center">
                          <span className="text-yellow-400 text-xl font-bold">
                            {movie.rating}
                            <span className="text-white text-sm font-normal">
                              %
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
