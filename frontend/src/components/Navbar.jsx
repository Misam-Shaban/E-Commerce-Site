import { useState } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full bg-black/40 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left Section: Menu Icon + Logo + Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Hamburger Menu Icon */}
          <button
            className="p-1 text-white hover:text-gray-300 transition focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Brand Logo */}
          <a
            href="#"
            className="text-2xl font-black tracking-tighter uppercase font-serif"
          >
            AURE.STUDIO
          </a>

          {/* Category Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 ml-4">
            {["MEN", "WOMEN", "JUNIORS"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold tracking-widest hover:text-gray-300 transition uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section: Underline Search Bar + Account + Shopping Bag */}
        <div className="flex items-center space-x-6">
          {/* Minimal Underline Search Input */}
          <div className="relative flex items-center border-b border-white/70 focus-within:border-white pb-1 w-32 sm:w-48 transition-all">
            <svg
              className="w-4 h-4 text-white mr-2 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs font-medium text-white placeholder-gray-300 focus:outline-none w-full"
            />
          </div>

          {/* User Account Icon */}
          <button
            className="p-1 hover:text-gray-300 transition"
            aria-label="Account"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          {/* Shopping Bag Icon */}
          <button
            className="p-1 hover:text-gray-300 transition relative"
            aria-label="Shopping Bag"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
