
import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

const LuxuryNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-black/10 fixed top-0 left-0 right-0 z-50">
      <div className="luxury-container">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {/* Left Navigation (hidden on mobile) */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="nav-link">Collections</a>
            <a href="#" className="nav-link">Jewelry</a>
            <a href="#" className="nav-link">Watches</a>
          </nav>
          
          {/* Logo */}
          <div className="flex-1 md:flex-none text-center">
            <a href="#" className="luxury-title text-xl md:text-2xl">LUMINEUX</a>
          </div>
          
          {/* Right Navigation (hidden on mobile) */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="hover:text-luxury-light transition-colors">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="hover:text-luxury-light transition-colors">
              <User size={20} />
            </button>
            <button aria-label="Cart" className="hover:text-luxury-light transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu (only visible when open) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-black/10 shadow-lg animate-fadeIn">
          <nav className="flex flex-col p-4">
            <a href="#" className="py-3 nav-link">Collections</a>
            <a href="#" className="py-3 nav-link">Jewelry</a>
            <a href="#" className="py-3 nav-link">Watches</a>
            <a href="#" className="py-3 nav-link">About</a>
            <a href="#" className="py-3 nav-link">Services</a>
            <a href="#" className="py-3 nav-link">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default LuxuryNavbar;
