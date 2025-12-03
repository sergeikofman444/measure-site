"use client";
import Image from "next/image";
import { menuItems } from "@/constants/menu";
import MenuItem from "./Menu";
import localFont from "next/font/local";
import { useState } from "react";
import { X } from "lucide-react";

const akira = localFont({
  src: [
    {
      path: "../../app/fonts/akira.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const ztNature = localFont({
  src: [
    {
      path: "../../app/fonts/ztnature/ZTNature-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full h-80">
        <div className="relative h-64">
          <Image
            src="/hero.jpg"
            alt="Concert Photo"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col justify-between items-center p-4">
          <div className="flex flex-col gap-2 w-fit items-center text-center">
            <div className={`${akira.className}`}>
              <div className="text-5xl">Measure // Sergei Kofman</div>
            </div>
          </div>
          <div className="hidden md:flex gap-2 text-lg w-[60%] justify-between">
            {menuItems.map((item) => (
              <MenuItem key={item} item={item} onClose={() => {}} />
            ))}
          </div>
          <div className="md:hidden flex w-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`
                    md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black 
                    transition-opacity duration-200 
                    ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
      >
        <div className="gap-4 flex flex-col items-center">
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              item={item}
              onClose={() => setIsMenuOpen(false)}
            />
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 p-2"
          aria-label="Close menu"
        >
          <X size={24} color="white" />
        </button>
      </div>
    </>
  );
}
