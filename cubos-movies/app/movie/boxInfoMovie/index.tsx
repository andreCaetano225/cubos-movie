interface BoxInfoMovieProps {
  title: string;
  value: string | number;
}

export const BoxInfoMovie = ({ title, value }: BoxInfoMovieProps) => {
  return (
    <div className="bg-[#2a2730]/70 p-4 rounded w-[9rem]">
      <h3 className="text-sm text-[#B5B2BC] uppercase font-bold">{title}</h3>
      <p className="text-white font-semibold">{value}</p>
    </div>
  );
};
