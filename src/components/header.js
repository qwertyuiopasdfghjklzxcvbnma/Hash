"use client";

import Link from "next/link";
import Logo from "./logo";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="text-white rounded-b-[3rem] w-full flex items-center justify-between p-6 ">
      <div>
        <Logo />
      </div>

      <nav className="hidden md:flex flex-1 justify-start text-sm ml-12">
        <ul className="flex gap-12">
          <li className="font-bold cursor-pointer hover:text-gray-400">
            Бидний тухай
          </li>
          <li className="font-bold cursor-pointer hover:text-gray-400">
            Тусламж
          </li>
          <li className="font-bold cursor-pointer hover:text-gray-400">
            Холбоо барих
          </li>
        </ul>
      </nav>

      <div className="flex gap-4">

        <button
          onClick={() => router.push("/register")}
          className="py-1 px-2 bg-gray-400 rounded-full z-40 hover:bg-gray-500 transition duration-300"
        >
          Бүртгүүлэх
        </button>
        <button
        onClick={() => router.push("/signup")}
          className="w-24 h-8 bg-purple-600 rounded-full hover:bg-purple-800 transition duration-300 z-40"
        >
          Нэвтрэх
        </button>
      </div>
    </header>
  );
};

export default Header;
