

export default function CategoryBar() {
  const categories = [
  { name: 'T-SHIRTS', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500' },
  { name: 'POLOS', img: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500' },
  { name: 'SHIRTS', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500' },
  { name: 'ACTIVEWEAR', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500' },
  { name: 'DENIM', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500' },
  { name: 'TROUSERS', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500' },
];

  return (
    <section className="w-full bg-[#181818] py-8 px-4 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">
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