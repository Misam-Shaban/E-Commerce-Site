import Navbar from "../Components/Navbar.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* 1. Top Announcement Bar */}
      {/* <div className="bg-black text-white text-xs py-2 text-center font-medium tracking-wide">
        ⚡ FREE SHIPPING ON ORDERS OVER $99 | USE CODE:{" "}
        <span className="underline font-bold">FASHION2026</span>
      </div> */}

      {/* 2. Modern Navbar */}
      <Navbar />

      {/* 3. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 text-white min-h-[520px] flex items-center p-12">
          {/* Background Image Placeholder */}
          <div
            className="absolute inset-0 opacity-50 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop')`,
            }}
          />

          <div className="relative z-10 max-w-xl space-y-6">
            <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Spring / Summer Collection '26
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
              REDEFINE YOUR DAILY STYLE.
            </h1>
            <p className="text-gray-300 text-base">
              Discover minimalist streetwear and high-end fashion pieces crafted
              for comfort and modern aesthetic.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-200 transition">
                Shop Collection
              </button>
              <button className="border border-white/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition">
                Explore Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Shop By Category
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Explore top collections curated for you
            </p>
          </div>
          <a
            href="#"
            className="text-xs font-bold uppercase underline tracking-wider hover:text-gray-600"
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
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-72"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Trending Items
            </h2>
            <p className="text-gray-500 text-sm mt-1">
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
              className="group bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square mb-4">
                <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {prod.tag}
                </span>
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm group-hover:text-black transition">
                {prod.title}
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="font-black text-base">{prod.price}</span>
                <button className="bg-gray-100 hover:bg-black hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition">
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="border-t border-gray-200 bg-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-black uppercase mb-4">AURA.STUDIO</div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Modern clothing store UI built with React and Tailwind CSS for
              seamless shopping experience.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3">
              Shop
            </h4>
            <ul className="text-xs text-gray-500 space-y-2">
              <li>Men's Wear</li>
              <li>Women's Wear</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3">
              Help
            </h4>
            <ul className="text-xs text-gray-500 space-y-2">
              <li>Order Status</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-3">
              Newsletter
            </h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-xs border rounded-lg mb-2 focus:outline-none"
            />
            <button className="w-full bg-black text-white py-2 rounded-lg text-xs font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
