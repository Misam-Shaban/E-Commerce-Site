import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to AURA.STUDIO!');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#121212] text-gray-400 text-sm border-t border-dark-surface pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Newsletter Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-[#262626] gap-8">
          <div className="max-w-md">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider">
              JOIN THE AURA CLUB
            </h3>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Subscribe to receive updates, early access to exclusive drops, and special offers directly in your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto items-center">
            <div className="relative flex items-center border-b border-gray-500 focus-within:border-white w-full sm:w-80 transition-all pb-1">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent py-2 text-xs text-white placeholder-gray-500 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="text-xs font-extrabold uppercase text-white hover:text-gray-300 transition tracking-widest pl-4 shrink-0"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-[#262626]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="text-2xl font-black text-white tracking-widest uppercase">
              AURA.STUDIO
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Redefining modern streetwear and high-fashion aesthetics. Crafted for comfort, precision, and bold individuality.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p><span className="text-gray-200 font-semibold">Store Hours:</span> Mon - Sat: 11:00 AM - 10:00 PM</p>
              <p><span className="text-gray-200 font-semibold">Support:</span> support@aura.studio</p>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#men" className="hover:text-white transition">Men's Collection</a></li>
              <li><a href="#women" className="hover:text-white transition">Women's Collection</a></li>
              <li><a href="#juniors" className="hover:text-white transition">Juniors & Kids</a></li>
              <li><a href="#footwear" className="hover:text-white transition">Footwear & Kicks</a></li>
              <li><a href="#accessories" className="hover:text-white transition">Accessories Edit</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#track" className="hover:text-white transition">Track Order</a></li>
              <li><a href="#shipping" className="hover:text-white transition">Shipping & Delivery</a></li>
              <li><a href="#returns" className="hover:text-white transition">Returns & Exchanges</a></li>
              <li><a href="#faqs" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#about" className="hover:text-white transition">About AURA</a></li>
              <li><a href="#stores" className="hover:text-white transition">Store Locator</a></li>
              <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500">
            © 2026 AURA.STUDIO. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-gray-400">
            <a href="#instagram" className="hover:text-white transition uppercase font-semibold text-[11px] tracking-wider">Instagram</a>
            <a href="#tiktok" className="hover:text-white transition uppercase font-semibold text-[11px] tracking-wider">TikTok</a>
            <a href="#pinterest" className="hover:text-white transition uppercase font-semibold text-[11px] tracking-wider">Pinterest</a>
            <a href="#twitter" className="hover:text-white transition uppercase font-semibold text-[11px] tracking-wider">X / Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}