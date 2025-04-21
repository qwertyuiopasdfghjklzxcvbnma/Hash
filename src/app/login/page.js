"use client";

import { useState } from "react";
import Modal from "../components/modal";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <div className="flex flex-col md:flex-row justify-between px-8 py-12 gap-10">
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold mb-6">Бүртгүүлэх</h1>

          <input type="text" placeholder="Дэлгүүрийн Нэр" className="input" />
          <input type="text" placeholder="Утасны дугаар" className="input" />
          <input type="email" placeholder="И-мэйл хаяг" className="input" />
          <input type="text" placeholder="Дэлгүүрийн Хаяг" className="input" />
          <input
            type="text"
            placeholder="Яаралтай холбоо барих утас"
            className="input"
          />
          <input
            type="text"
            placeholder="Регистрийн дугаар"
            className="input"
          />
          <input
            type="password"
            placeholder="Нууц үг үүсгэх"
            className="input"
          />
          <input
            type="password"
            placeholder="Нууц үг баталгаажуулах"
            className="input"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md font-semibold transition"
          >
            Бүртгүүлэх
          </button>
        </form>

        {/* Optional Side Image */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img src="/map.png" alt="Polygon Map" className="max-w-full h-auto" />
        </div>
      </div>

      <Footer />

      {/* Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}
