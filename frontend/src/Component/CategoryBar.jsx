

export default function CategoryBar() {
  const categories = [
  { name: 'T-SHIRTS', img: 'https://i.pinimg.com/736x/16/27/32/1627320c5788efd981fce29ad0fe8b6a.jpg' },
  { name: 'POLOS', img: 'https://i.pinimg.com/1200x/9f/9f/d6/9f9fd633e41bb1f0338873998b89f4da.jpg' },
  { name: 'SHIRTS', img: 'https://i.pinimg.com/736x/f2/7e/fe/f27efe8eb1cf32a628d8006ebe610820.jpg' },
  { name: 'ACTIVEWEAR', img: 'https://i.pinimg.com/736x/22/1a/8b/221a8ba526ba5269a26142df30ec8381.jpg' },
  { name: 'DENIM', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500' },
  { name: 'TROUSERS', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500' },
];

  return (
    <section className="w-full bg-[#181818] py-8 px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-8xl mx-auto">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={`#${cat.name.toLowerCase()}`}
            className="group relative h-80 md:h-95 overflow-hidden rounded-md cursor-pointer block"
          >
            {/* Background Image */}
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
            />

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300 flex items-center justify-center p-2">
              {/* Category Name */}
              <h3 className="text-white font-extrabold text-sm md:text-base uppercase tracking-widest text-center drop-shadow-md">
                {cat.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}