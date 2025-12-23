"use client";

import { FaSpotify, FaApple, FaYoutube, FaBandcamp } from "react-icons/fa";
import ListenButton from "./components/ListenButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-sm px-6 pt-4 text-center space-y-6">
        {/* Album Cover */}
        <img
          src="/cover-2.JPG"
          alt="Home album cover"
          className="mx-auto rounded-xl shadow-lg"
        />

        {/* Album Title */}
        <h1 className="text-2xl font-semibold tracking-wide">Home</h1>

        {/* Listen Links */}

        <div className="flex flex-col gap-8 pt-2">
          <ListenButton
            href="https://sergiodelima.bandcamp.com"
            icon={FaBandcamp}
            label="Bandcamp"
            available={true}
          />

          <ListenButton
            href="https://open.spotify.com/..."
            icon={FaSpotify}
            label="Spotify"
            available={false}
          />

          <ListenButton
            href="https://music.apple.com/..."
            icon={FaApple}
            label="Apple Music"
            available={false}
          />

          {/* <ListenButton
            href="https://youtube.com/..."
            icon={FaYoutube}
            label="YouTube"
            available={false}
          /> */}
        </div>
        {/* Footer */}
        <div className="pt-10 text-center">
          <p className="text-sm text-white/60 mb-2">
            Collaborations, or just to say hi
          </p>

          <a
            href="mailto:sergio.delima.nola@gmail.com"
            className="inline-block text-white font-medium
      underline underline-offset-4
      hover:text-white/80 transition"
          >
            sergio.delima.nola@gmail.com
          </a>

          {/* Copyright */}
          <p className="mt-6 text-xs text-white/40">
            © {new Date().getFullYear()} Sergio DeLima. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
