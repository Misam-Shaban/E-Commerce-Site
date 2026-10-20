

export default function AccessoriesSection() {
  const accessories = [
    {
      title: "Bags & Backpacks",
      subtitle: "Carry Essentials",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      link: "#bags",
    },
    {
      title: "Headwear",
      subtitle: "Caps & Beanies",
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600",
      link: "#headwear",
    },
    {
      title: "Eyewear & Shades",
      subtitle: "Minimalist Frames",
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
      link: "#eyewear",
    },
    {
      title: "Leather & Wallets",
      subtitle: "Premium Goods",
      img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
      link: "#wallets",
    },
  ];

  return (
    <section className="w-full bg-[#181818] py-20 px-4 md:px-8 border-t border-dark-surface">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
            The Accessory Edit
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-2">
            Men & Women Accessories
          </h2>
          <div className="w-12 h-0.5 bg-white/20 mx-auto mt-4" />
        </div>

        {/* 4-Column Modular Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="group relative h-95 rounded-2xl overflow-hidden bg-[#222222] border border-[#333333] hover:border-white/50 transition duration-500 cursor-pointer block shadow-xl"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition duration-700"
              />

              {/* Dark Overlay with Text */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-extrabold text-white uppercase tracking-wider group-hover:translate-x-1 transition duration-300">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}