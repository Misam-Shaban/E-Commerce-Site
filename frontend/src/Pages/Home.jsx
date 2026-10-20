import Navbar from "../Component/Navbar.jsx";
import Hero from "../Component/Hero.jsx";
import CategoryBar from "../Component/CategoryBar.jsx";
import CategoriesInFocus from "../Component/CategoriesInFocus.jsx";
import AccessoriesSection from "../Component/AccessoriesSection.jsx";
import FootwearSection from "../Component/FootwearSection.jsx";
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
      {/* Footwear Section */}        
      <FootwearSection />
      

      

    

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