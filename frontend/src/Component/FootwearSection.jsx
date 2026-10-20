

export default function FootwearSection() {
  const footwearCategories = [
    {
      title: "Urban Sneakers",
      tag: "Streetwear Kicks",
      priceRange: "From PKR 8,990",
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
      link: "#sneakers",
    },
    {
      title: "Chunky Boots",
      tag: "High-Street Utility",
      priceRange: "From PKR 12,490",
      img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600",
      link: "#boots",
    },
    {
      title: "Minimal Loafers",
      tag: "Smart Casual",
      priceRange: "From PKR 9,990",
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600",
      link: "#loafers",
    },
    {
      title: "Slides & Mules",
      tag: "Daily Comfort",
      priceRange: "From PKR 4,490",
      img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600",
      link: "#slides",
    },
  ];

  return (
    <section className="w-full bg-[#181818] py-20 px-4 md:px-8 border-t border-dark-surface">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-dark-surface pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
              Sole Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
              Footwear Collection
            </h2>
          </div>
          <a 
            href="#all-footwear" 
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition flex items-center gap-2 group"
          >
            Explore All Kicks
            <span className="group-hover:translate-x-1 transition duration-300">→</span>
          </a>
        </div>

        {/* Footwear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {footwearCategories.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="group relative h-105 rounded-2xl overflow-hidden bg-[#222222] border border-[#333333] hover:border-white/50 transition duration-500 cursor-pointer block shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition duration-700"
              />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-300">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Dark Gradient & Info */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-black text-white uppercase tracking-wider group-hover:translate-x-1 transition duration-300">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-gray-400 mt-1">
                  {item.priceRange}
                </p>

                <div className="h-0.5 w-0 group-hover:w-full bg-white transition-all duration-500 mt-3" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}