import Navbar from "../Component/Navbar.jsx";
import Hero from "../Component/Hero.jsx";
import CategoryBar from "../Component/CategoryBar.jsx";
import CategoriesInFocus from "../Component/CategoriesInFocus.jsx";
import AccessoriesSection from "../Component/AccessoriesSection.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-[#181818] text-gray-100 font-sans pb-10">
      {/* Global Dark Background applied here */}
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />


      {/* Category Bar */}
      <CategoryBar />
      {/* Category Section */}
      <CategoriesInFocus />
      {/* Accessories Section */}
      <AccessoriesSection />  
      {/* 3. Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 mt-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Shop By Category
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Explore top collections curated for you
            </p>
          </div>
          <a
            href="#"
            className="text-xs font-bold uppercase underline tracking-wider text-gray-400 hover:text-white transition"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Streetwear",
              img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
            },
            {
              title: "Men's Apparel",
              img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600",
            },
            {
              title: "Women's Fashion",
              img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
            },
            {
              title: "Footwear & Accessories",
              img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
            },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-80"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100"
              />
              <div
                className="absolute inset-0 flex items-end p-6"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgb(0 0 0 / 90%), rgb(0 0 0 / 30%), transparent)",
                }}
              >
                <h3 className="text-white font-bold text-xl tracking-wide">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Trending Items
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Handpicked favorites this season
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Oversized Heavyweight Hoodie",
              price: "$89.00",
              tag: "Bestseller",
              img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600",
            },
            {
              title: "Minimalist Utility Jacket",
              price: "$149.00",
              tag: "New",
              img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600",
            },
            {
              title: "Classic Straight Denim",
              price: "$79.00",
              tag: "Popular",
              img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
            },
            {
              title: "Urban Canvas Sneakers",
              price: "$110.00",
              tag: "Sale",
              img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
            },
          ].map((prod, idx) => (
            <div
              key={idx}
              className="group bg-[#222222] rounded-2xl p-4 border border-[#333333] hover:border-gray-500 transition duration-300"
            >
              <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] aspect-square mb-5">
                <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  {prod.tag}
                </span>
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              <h3 className="font-semibold text-gray-300 text-sm group-hover:text-white transition">
                {prod.title}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <span className="font-black text-lg text-white">{prod.price}</span>
                <button className="bg-[#333333] text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg text-xs font-bold transition duration-300">
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-[#333333] bg-[#111111] mt-24 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-black uppercase mb-5 text-white tracking-widest">AURA.STUDIO</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Modern premium clothing store UI built with React and Tailwind CSS for a seamless shopping experience.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-white">
              Shop
            </h4>
            <ul className="text-sm text-gray-400 space-y-3">
              <li className="hover:text-white cursor-pointer transition">Men's Wear</li>
              <li className="hover:text-white cursor-pointer transition">Women's Wear</li>
              <li className="hover:text-white cursor-pointer transition">Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-white">
              Help
            </h4>
            <ul className="text-sm text-gray-400 space-y-3">
              <li className="hover:text-white cursor-pointer transition">Order Status</li>
              <li className="hover:text-white cursor-pointer transition">Shipping & Delivery</li>
              <li className="hover:text-white cursor-pointer transition">Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-white">
              Newsletter
            </h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-sm bg-[#222222] border border-[#444444] text-white rounded-lg mb-3 focus:outline-none focus:border-white transition"
            />
            <button className="w-full bg-white text-black py-3 rounded-lg text-sm font-bold hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;