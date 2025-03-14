
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full">
      {/* Collection Chip */}
      <div className="slide-animation animation-delay-100">
        <span className="inline-block uppercase text-xs tracking-widest font-medium bg-black text-white px-3 py-1 mb-4">
          Eternal Collection
        </span>
      </div>
      
      {/* Product Title */}
      <h1 className="luxury-title text-3xl md:text-4xl mb-3 slide-animation animation-delay-200">
        Ethereal Diamond Ring
      </h1>
      
      {/* Price */}
      <p className="text-xl font-light mb-8 slide-animation animation-delay-300">$12,500</p>
      
      {/* Description */}
      <div className="mb-8 slide-animation animation-delay-400">
        <p className="luxury-text mb-4">
          The Ethereal Diamond Ring epitomizes timeless elegance, featuring a flawless 2-carat diamond 
          meticulously set in 18k white gold. Each facet reflects light with unparalleled brilliance,
          creating a captivating play of light that symbolizes eternal devotion.
        </p>
        <p className="luxury-text">
          Handcrafted by master artisans, this exceptional piece represents the pinnacle of fine jewelry craftsmanship,
          with attention to every detail ensuring a legacy that transcends generations.
        </p>
      </div>
      
      {/* Specifications */}
      <div className="mb-8 slide-animation animation-delay-500">
        <h2 className="uppercase tracking-widest text-xs font-medium mb-4">Specifications</h2>
        <ul className="space-y-2 font-light">
          <li className="flex">
            <span className="w-32 text-black/60">Material</span>
            <span>18k White Gold</span>
          </li>
          <li className="flex">
            <span className="w-32 text-black/60">Diamond</span>
            <span>2.0 Carat, VS1 Clarity</span>
          </li>
          <li className="flex">
            <span className="w-32 text-black/60">Cut</span>
            <span>Round Brilliant</span>
          </li>
          <li className="flex">
            <span className="w-32 text-black/60">Setting</span>
            <span>Solitaire Prong</span>
          </li>
          <li className="flex">
            <span className="w-32 text-black/60">Size</span>
            <span>Available from 4 to 9</span>
          </li>
        </ul>
      </div>
      
      {/* Size Selection */}
      <div className="mb-8">
        <h2 className="uppercase tracking-widest text-xs font-medium mb-4">Size</h2>
        <div className="flex flex-wrap gap-2">
          {[4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map((size) => (
            <button
              key={size}
              className="w-10 h-10 flex items-center justify-center border border-black/20 hover:border-black transition-all duration-300"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      
      {/* Quantity */}
      <div className="mb-8">
        <h2 className="uppercase tracking-widest text-xs font-medium mb-4">Quantity</h2>
        <div className="flex items-center">
          <button 
            className="w-10 h-10 border border-black/20 flex items-center justify-center"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          >
            -
          </button>
          <div className="w-14 h-10 border-t border-b border-black/20 flex items-center justify-center">
            {quantity}
          </div>
          <button 
            className="w-10 h-10 border border-black/20 flex items-center justify-center"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      {/* Add to Cart and Wishlist */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="btn-luxury-primary flex-1">Add to cart</button>
        <button className="btn-luxury-secondary flex items-center justify-center gap-2">
          <Heart size={16} />
          <span>Wishlist</span>
        </button>
      </div>
      
      {/* Additional information */}
      <div className="mt-12 pt-8 border-t border-black/10">
        <div className="space-y-6">
          <div>
            <h3 className="uppercase tracking-widest text-xs font-medium mb-2">Complimentary Services</h3>
            <p className="luxury-text">Free shipping, 30-day returns, lifetime warranty, and complimentary cleaning.</p>
          </div>
          <div>
            <h3 className="uppercase tracking-widest text-xs font-medium mb-2">Secure Payment</h3>
            <p className="luxury-text">All transactions are secure and encrypted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
