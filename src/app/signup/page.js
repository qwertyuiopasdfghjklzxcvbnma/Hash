"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Header2 from "@/components/header2";
import Footer from "@/components/footer";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate login delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#0e0e0e] text-white flex flex-col overflow-hidden">
      {/* ✅ Full-Screen Blurry Map Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/map.svg"
          alt="Map Background"
          fill
          priority
          className="object-cover object-center blur-2xl opacity-30"
        />
      </div>

      {/* ✅ Optional Dark Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-[#0e0e0e]/70 -z-10" />

      <Header2 />

      {/* ✅ Main Layout */}
      <main className="flex flex-1 flex-col lg:flex-row items-center justify-center px-6 py-16 gap-16 relative z-10">
        {/* Left Side: Welcome Text */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">Нэвтрэх</h1>
          <p className="text-white/70 mb-6">
            Та өөрийн бүртгэлтэй хаягаараа нэвтэрнэ үү. Хамтдаа амжилт бүтээцгээе!
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium px-4 py-3 rounded-full shadow-md transition hover:opacity-90">
            Тусламж хэрэгтэй юу?
          </button>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Нэвтрэх</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="И-мэйл хаяг"
              className="w-full px-4 py-3 bg-white/10 rounded-md text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              placeholder="Нууц үг"
              className="w-full px-4 py-3 bg-white/10 rounded-md text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-md shadow hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Түр хүлээнэ үү..." : "Нэвтрэх"}
            </button>

            <p className="text-center text-sm text-white/60 mt-4">
              Бүртгэлгүй юу?{" "}
              <a href="/register" className="text-purple-400 underline">
                Бүртгүүлэх
              </a>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
