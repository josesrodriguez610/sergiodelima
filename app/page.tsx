"use client";

import { FaSpotify, FaApple, FaYoutube, FaBandcamp } from "react-icons/fa";
import ListenButton from "./components/ListenButton";
import ArtistHero from "./components/hero/ArtistHero";
import ReleaseCard from "./components/release/ ReleaseCard";
import SiteFooter from "./components/footer/ SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ArtistHero imageSrc="/sergio_delima.jpg" name="Sergio DeLima" />
      {/* EXISTING CONTENT (UNCHANGED) */}

      {/* Release */}
      <div className="flex items-center justify-center">
        <ReleaseCard coverSrc="/home_album.JPG" title="Home" meta="EP • 2026" />
      </div>

      <SiteFooter />
    </main>
  );
}
