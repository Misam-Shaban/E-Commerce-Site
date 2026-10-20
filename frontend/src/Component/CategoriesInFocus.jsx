import { useState } from 'react';

export default function CategoriesInFocus() {
  const [activeCategory, setActiveCategory] = useState('Sweatshirts & Hoodies');

  // Interactive Data for Tabs
  const categoriesData = {
    'Sweatshirts & Hoodies': {
      featuredImg: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800',
      products: [
        {
          id: 1,
          title: 'SLOGAN PRINT SWEATSHIRT',
          fit: 'RELAXED FIT | MEN',
          price: 'PKR 4,990',
          img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600',
          colors: ['#e5e3d6', '#181818'],
        },
        {
          id: 2,
          title: 'RELAXED FIT ZIP-UP HOODIE',
          fit: 'RELAXED FIT | MEN',
          price: 'PKR 7,490',
          img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600',
          colors: ['#4a3b32', '#828282'],
        },
        {
          id: 3,
          title: 'HEAVYWEIGHT OVERSIZED HOODIE',
          fit: 'OVERSIZED | MEN',
          price: 'PKR 6,490',
          img: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600',
          colors: ['#181818', '#c2b280'],
        },
        {
          id: 4,
          title: 'ESSENTIAL CREWNECK SWEATSHIRT',
          fit: 'REGULAR FIT | MEN',
          price: 'PKR 3,990',
          img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600',
          colors: ['#2b3a4a'],
        },
      ],
    },
    'Trousers': {
      featuredImg: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
      products: [
        {
          id: 5,
          title: 'WIDE-LEG CARGO TROUSERS',
          fit: 'RELAXED FIT | MEN',
          price: 'PKR 6,990',
          img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600',
          colors: ['#383b2e', '#181818'],
        },
        {
          id: 6,
          title: 'PLEATED TAPERED PANTS',
          fit: 'SLIM FIT | MEN',
          price: 'PKR 5,490',
          img: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600',
          colors: ['#222222', '#8c8c8c'],
        },
      ],
    },
    'Shirts': {
      featuredImg: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
      products: [
        {
          id: 7,
          title: 'OVERSIZED LINEN SHIRT',
          fit: 'RELAXED FIT | MEN',
          price: 'PKR 4,890',
          img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
          colors: ['#ffffff', '#a8b5a0'],
        },
        {
          id: 8,
          title: 'CLASSIC DENIM BUTTON-DOWN',
          fit: 'REGULAR FIT | MEN',
          price: 'PKR 5,990',
          img: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600',
          colors: ['#2b4b7c'],
        },
      ],
    },
  };

  const tabs = Object.keys(categoriesData);
  const activeData = categoriesData[activeCategory];

  return (
    <section className="w-full bg-[#181818] py-16 px-4 md:px-8 text-white border-t border-dark-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Badi Featured Model Photo */}
        <div className="lg:col-span-5 h-125 md:h-155 rounded-2xl overflow-hidden bg-[#222] border border-[#333] shadow-2xl relative group">
          <img
            src={activeData.featuredImg}
            alt={activeCategory}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Right Column: Title + Filter Tabs + Horizontal Scrollable Carousel */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2">
          
          {/* Header & Interactive Category Tabs */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
              Categories in Focus
            </h2>

            {/* Interactive Tabs */}
            <div className="flex flex-col space-y-2 mt-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`text-left text-lg md:text-xl font-bold transition-all duration-300 w-fit ${
                    activeCategory === tab
                      ? 'text-white underline underline-offset-8 decoration-2'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Scrollable Carousel Slider */}
          <div className="relative w-full">
            <div className="flex space-x-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory">
              
              {/* Product Cards Map */}
              {activeData.products.map((prod) => (
                <div
                  key={prod.id}
                  className="min-w-55 sm:min-w-62.5 max-w-62.5 snap-start bg-[#222222] rounded-xl p-3 border border-[#333333] hover:border-gray-500 transition duration-300 shrink-0 group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="w-full aspect-3/4 rounded-lg overflow-hidden bg-[#f5f5f5] mb-3 relative">
                    <img
                      src={prod.img}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs font-bold uppercase tracking-wide text-gray-100 line-clamp-1 group-hover:text-white transition">
                    {prod.title}
                  </h3>

                  {/* Fit Sub-tag */}
                  <p className="text-[10px] text-gray-400 font-semibold tracking-wider mt-1 uppercase">
                    {prod.fit}
                  </p>

                  {/* Price */}
                  <p className="text-xs font-extrabold text-white mt-2">
                    {prod.price}
                  </p>

                  {/* Color Swatches */}
                  <div className="flex items-center space-x-1.5 mt-3">
                    {prod.colors.map((colorHex, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-sm border border-gray-600 inline-block shadow-sm"
                        style={{ backgroundColor: colorHex }}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Far Right "View All Collection" Card */}
              <div className="min-w-45 sm:min-w-50 snap-start rounded-xl border border-[#333333] border-dashed hover:border-white bg-[#1f1f1f] hover:bg-[#252525] transition duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer shrink-0">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white flex items-center gap-2">
                  View all collection
                  <span className="text-base">→</span>
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
