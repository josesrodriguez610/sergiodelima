import { FaSpotify, FaApple, FaBandcamp } from "react-icons/fa";
import ListenButton from "../ListenButton";

type ReleaseCardProps = {
  coverSrc: string;
  title: string;
  meta: string; // e.g. "EP • 2026"
};

export default function ReleaseCard({
  coverSrc,
  title,
  meta,
}: ReleaseCardProps) {
  return (
    <div className="w-full max-w-sm px-6 pt-8 text-center space-y-6">
      {/* Album Cover */}
      <img
        src={coverSrc}
        alt={`${title} cover`}
        className="mx-auto rounded-xl shadow-lg"
      />

      {/* Album Title */}
      <h1 className="text-2xl font-semibold tracking-wide mb-2">{title}</h1>

      {/* Meta */}
      <p className="text-sm text-white/50">{meta}</p>

      {/* Listen Links */}
      <div className="flex flex-col gap-8 pt-2">
        <ListenButton
          href="https://open.spotify.com/artist/3BCPmiMSRmmVAIZCmZpAcm"
          icon={FaSpotify}
          label="Spotify"
          available={true}
        />

        <ListenButton
          href="https://music.apple.com/us/artist/sergio-delima/1865563457"
          icon={FaApple}
          label="Apple Music"
          available={true}
        />

        <ListenButton
          href="https://sergiodelima.bandcamp.com"
          icon={FaBandcamp}
          label="Bandcamp"
          available={true}
        />
      </div>
    </div>
  );
}
