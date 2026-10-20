import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between border-b border-white/10">
        
        {/* Left Section: Menu + Logo */}
        <div className="flex items-center space-x-6">
          <button className="p-1 text-white hover:text-gray-300 transition focus:outline-none" aria-label="Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a href="/" className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
            AURA.STUDIO
          </a>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-[0.15em] uppercase text-gray-300">
          <a href="#men" className="hover:text-white transition">Men</a>
          <a href="#women" className="hover:text-white transition">Women</a>
          <a href="#juniors" className="hover:text-white transition">Juniors</a>
        </nav>

        {/* Right Section: Fixed Search + Icons */}
        <div className="flex items-center space-x-6">
          <div className="relative flex items-center border-b border-gray-400 focus-within:border-white pb-1 w-40 sm:w-56 transition-all">
            
            {/* Yahan SVG hata kar clean emoji laga diya gaya hai */}
            <span className="text-white text-sm mr-3 select-none">🔍</span>
            
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs font-medium text-white placeholder-gray-400 focus:outline-none w-full"
            />
          </div>

          <button className="p-1 hover:text-gray-300 transition" aria-label="User Account">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          <button className="p-1 hover:text-gray-300 transition relative" aria-label="Shopping Bag">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}