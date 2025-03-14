
import React from 'react';

const LuxuryFooter = () => {
  return (
    <footer className="w-full bg-white border-t border-black/10 pt-16 pb-8">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="luxury-title text-lg mb-6">LUMINEUX</h3>
            <p className="luxury-text text-sm mb-6">
              Crafting timeless elegance since 1897. Each piece represents our commitment to excellence
              and the art of fine jewelry making.
            </p>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-medium mb-6">Collections</h4>
            <ul className="space-y-3">
              <li><a href="#" className="luxury-text text-sm hover:underline">Eternal</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Celestial</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Heritage</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Luminous</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Bridal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-medium mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="luxury-text text-sm hover:underline">Contact Us</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Warranty & Repairs</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Ring Sizing Guide</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Care Instructions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-medium mb-6">About</h4>
            <ul className="space-y-3">
              <li><a href="#" className="luxury-text text-sm hover:underline">Our Story</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Craftsmanship</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Sustainability</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Boutique Locations</a></li>
              <li><a href="#" className="luxury-text text-sm hover:underline">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/10 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="luxury-text text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="luxury-text text-sm hover:underline">Terms of Service</a>
            <a href="#" className="luxury-text text-sm hover:underline">Accessibility</a>
          </div>
          <p className="luxury-text text-xs text-black/60">
            © {new Date().getFullYear()} LUMINEUX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;
