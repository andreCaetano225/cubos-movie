export const TrailerSection = () => {
  return (
    <div className="p-4  rounded-md max-w-6xl w-full mx-auto relative z-20 mt-[-10rem]">
      <h2 className="text-white text-3xl font-semibold mb-4">Trailer</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-[35rem] rounded-md"
          src="https://www.youtube.com/embed/lcwmDAYt22k"
          title="Bumblebee (2018) - Official Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
