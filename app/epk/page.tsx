"use client";

import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaBandcamp,
  FaDownload,
} from "react-icons/fa";
import ArtistHero from "../components/hero/ArtistHero";
import SiteFooter from "../components/footer/ SiteFooter";

export default function EpkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ArtistHero imageSrc="/sergio_delima.jpg" name="Sergio DeLima" />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div className="flex justify-center md:justify-end">
          <img
            src="/home_album.JPG"
            alt="Home by Sergio DeLima"
            className="w-full max-w-sm rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            EPK
          </p>

          <h1 className="mt-3 text-4xl font-light md:text-6xl">Home 2026</h1>

          <p className="mt-3 text-lg text-zinc-300">Featuring “With My Love”</p>

          <p className="mt-6 max-w-xl leading-7 text-zinc-400">
            Sergio DeLima is an indie rock artist from Louisiana blending
            atmospheric guitars, melody, and emotional songwriting. “With My
            Love” is a featured track from <em>Home</em>, a 2026 release built
            around mood, connection, and cinematic guitar-driven textures.
          </p>

          <div className="mt-8">
            <h2 className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Listen
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://open.spotify.com/artist/3BCPmiMSRmmVAIZCmZpAcm"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-2">
                  <FaSpotify /> Spotify
                </span>
              </a>

              <a
                href="https://music.apple.com/us/artist/sergio-delima/1865563457"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-2">
                  <FaApple /> Apple Music
                </span>
              </a>

              <a
                href="https://sergiodelima.bandcamp.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-2">
                  <FaBandcamp /> Bandcamp
                </span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Download
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="/downloads/Sergio_DeLima-With_My_Love.mp3"
                download
                className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-2">
                  <FaDownload /> MP3
                </span>
              </a>

              <a
                href="/downloads/Sergio_DeLima-With_My_Love.wav"
                download
                className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-2">
                  <FaDownload /> WAV
                </span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Artwork
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="/home_album.JPG"
                download
                className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white hover:text-black"
              >
                <span className="flex items-center gap-2">
                  <FaDownload /> Album Cover
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-8 border-t border-white/10 pt-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-medium">Bio</h2>
            <p className="leading-7 text-zinc-300">
              Sergio DeLima is a Peruvian artist based in the United States
              creating and releasing music independently. His music features
              clean melodies and atmospheric sounds, exploring themes of
              connection, memories, and emotional presence. His 2026 release{" "}
              <em>Home</em> reflects these ideas through intimate songwriting
              and layered textures.
            </p>
            <p className="leading-7 text-zinc-300">
              “With My Love,” from <em>Home</em>, captures the feeling of
              sharing a moment with someone you love and realizing there is
              nowhere else in the world you would rather be than right there
              together.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-medium">Details</h2>
            <div className="space-y-2 text-zinc-300">
              <p>
                <span className="text-white">Artist:</span> Sergio DeLima
              </p>
              <p>
                <span className="text-white">Song:</span> With My Love
              </p>
              <p>
                <span className="text-white">Release:</span> Home
              </p>
              <p>
                <span className="text-white">Year:</span> 2026
              </p>
              <p>
                <span className="text-white">Genre:</span> Indie Rock /
                Alternative
              </p>
              <p>
                <span className="text-white">Location:</span> Louisiana, USA
              </p>
              <p>
                <span className="text-white">Website:</span>{" "}
                <a
                  href="https://www.sergiodelima.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-white"
                >
                  sergiodelima.com
                </a>
              </p>
              <p>
                <span className="text-white">Contact:</span>{" "}
                sergio.delima.nola@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
