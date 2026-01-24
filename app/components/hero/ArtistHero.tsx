type ArtistHeroProps = {
  imageSrc: string;
  name: string;
};

export default function ArtistHero({ imageSrc, name }: ArtistHeroProps) {
  return (
    <header className="relative w-full flex justify-center bg-black">
      <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden md:max-w-5xl">
        <img
          src={imageSrc}
          alt={name}
          className="
            absolute inset-0 h-full w-full object-cover
            scale-125
            sm:scale-110
            md:scale-100
            object-center
            md:object-[center_55%]
          "
        />

        {/* Side fades (desktop only) */}
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

        {/* Artist name */}
        <div className="absolute inset-x-0 bottom-10 px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            {name}
          </h1>
        </div>
      </div>
    </header>
  );
}
