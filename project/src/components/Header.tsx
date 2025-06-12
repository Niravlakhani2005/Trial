import React from 'react';
import { ShoppingBag, Search, Heart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-white/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#8B7355] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg">P</span>
            </div>
            <h1 className="text-3xl font-black text-[#111111]">
              Pages<span className="text-[#8B7355]">.</span>
            </h1>
          </div>

          {/* Enhanced Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { name: 'Book Combos', href: '#combos' },
              { name: 'Single Picks', href: '#singles' },
              { name: 'About', href: '#about' }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="relative text-[#111111] hover:text-[#8B7355] transition-all duration-300 font-bold text-lg group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B7355] to-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Actions */}
          <div className="flex items-center space-x-3">
            {[
              { icon: Search, label: 'Search' },
              { icon: Heart, label: 'Wishlist' },
              { icon: User, label: 'Account' }
            ].map((action, index) => (
              <button 
                key={index}
                className="group w-12 h-12 bg-white/60 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <action.icon size={20} className="text-[#111111] group-hover:text-[#8B7355] transition-colors duration-300" />
              </button>
            ))}
            
            <button 
              onClick={onCartClick}
              className="group relative w-12 h-12 bg-gradient-to-r from-[#8B7355] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ShoppingBag size={20} className="text-white" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden w-12 h-12 bg-white/60 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300">
              <Menu size={20} className="text-[#111111]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;