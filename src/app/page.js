"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Header2 from "@/components/header2";
import BackgroundStars from "@/components/stars";

export default function Home() {
  return (
    <main className="flex-grow bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white flex flex-col relative">
      <Header/>
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        {/* Background Stars */}
        <BackgroundStars />
        {/* Centered Text */}
        <div className="relative text-center">
          <h1 className="text-5xl font-bold">
            <span className="text-purple-400">Х</span>УРДАН
          </h1>
          <h1 className="text-5xl font-bold">
            <span className="text-purple-400">А</span>ЮУЛГҮЙ
          </h1>
          <h1 className="text-5xl font-bold">
            <span className="text-purple-400">Ш</span>УУРХАЙ
          </h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}
