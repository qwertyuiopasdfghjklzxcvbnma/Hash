"use client";

import Image from "next/image";

export default function Modal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="relative bg-black p-6 rounded-xl shadow-xl max-w-5xl w-full flex justify-center">
        <Image
          src="/map.svg"
          alt="Polygonal Mongolia Map"
          width={800}
          height={600}
          className="rounded-md"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Хаах
        </button>
      </div>
    </div>
  );
}
