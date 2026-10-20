export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-187.5 flex items-center text-white bg-[#1a1a1a]">
      
      {/* Background Image - Premium Dark Wardrobe */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Gradient for Text Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent" />

      {/* Main Content Container - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col justify-center">
        
        <div className="max-w-2xl space-y-7 pt-16"> 
          
          {/* Badge */}
          <span className="inline-block bg-white/5 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300">
            Spring / Summer Collection '26
          </span>
          
          {/* Hero Typography */}
          <h1 className="text-4xl md:text-7xl lg:text-[5rem] font-bold leading-[0.9] tracking-tighter uppercase text-white drop-shadow-lg">
            Redefine Your<br/>Daily Style.
          </h1>
          
          {/* Paragraph Spacing Fix */}
          <p className="text-gray-300 text-base md:text-lg max-w-md leading-relaxed pt-3">
            Discover minimalist streetwear and high-end fashion pieces crafted for comfort and modern aesthetic.
          </p>
          
          {/* Buttons Padding & Styling Fix */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 pt-8">
            <button className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition duration-300 shadow-xl">
              Shop Collection
            </button>
            <button className="w-full sm:w-auto border border-white/40 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-black transition duration-300 shadow-xl">
              Explore Lookbook
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}