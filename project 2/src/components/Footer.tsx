import React from 'react';
import { Instagram, Youtube, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Pages<span className="text-[#8B7355]">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Books are the most aesthetic way to grow. Join our community of modern readers.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                <Instagram size={18} />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                <Youtube size={18} />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#combos" className="text-gray-400 hover:text-white transition-colors">Book Combos</a></li>
              <li><a href="#singles" className="text-gray-400 hover:text-white transition-colors">Single Picks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Releases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bestsellers</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Self-Help</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fiction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health & Wellness</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#8B7355] to-[#D4AF37] rounded-3xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Book Journey?</h3>
          <p className="text-lg opacity-90 mb-6">Transform your mind, one page at a time.</p>
          <button className="bg-white text-[#111111] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Explore Our Collection
          </button>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Pages. Made with <Heart size={16} className="inline text-red-500" /> for Gen Z readers.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;