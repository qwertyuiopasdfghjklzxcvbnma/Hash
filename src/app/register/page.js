"use client";

import Header2 from "@/components/header2";
import Footer from "@/components/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Burtguuleh from "@/components/burtguuleh";

export default function RegisterPage() {
  const router = useRouter();
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
      {/* <div className="absolute inset-0 bg-[#0e0e0e]/70 -z-10" /> */}

      <Burtguuleh />

      {/* ✅ Main Layout */}
      <main className="flex flex-1 flex-col lg:flex-row items-center justify-center px-6 py-16 gap-16 relative z-10">
        {/* Left Side: Welcome Text */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">Тавтай морил!</h1>
          <p className="text-white/70 mb-6">
            Манай платформд бүртгүүлж, өөрийн дэлгүүрээ нэмээрэй. Хамтдаа амжилт
            бүтээцгээе!
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition hover:opacity-90">
            Дэлгэрэнгүй
          </button>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Бүртгүүлэх
          </h2>

          {/* <form className="space-y-4"> */}
          {[
            "Дэлгүүрийн нэр",
            "Утасны дугаар",
            "И-мэйл хаяг",
            "Дэлгүүрийн хаяг",
            "Яаралтай утас",
            "Регистрийн дугаар",
            "Нууц үг",
            "Нууц үг давтах",
          ].map((placeholder, i) => (
            <input
              key={i}
              type={
                placeholder.includes("Нууц үг")
                  ? "password"
                  : placeholder.includes("И-мэйл")
                  ? "email"
                  : "text"
              }
              placeholder={placeholder}
              className="w-full mb-4 px-4 py-3 bg-white/10 rounded-md text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}

          <button
            // type="submit"
            onClick={() => router.push("/dashboard")}
            className="w-full py-3 z-50 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-md shadow hover:opacity-90 transition"
          >
            Илгээх
          </button>
          {/* </form> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
