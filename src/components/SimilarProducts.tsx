
import React from 'react';

const SimilarProducts = () => {
  const products = [
    {
      id: 1,
      name: "Celestial Diamond Necklace",
      price: "$8,900",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Infinity Diamond Bracelet",
      price: "$5,600",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Radiant Solitaire Earrings",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      name: "Luminous Pearl Ring",
      price: "$3,800",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="w-full py-16 mt-16 border-t border-black/10">
      <div className="luxury-container">
        <h2 className="luxury-title text-2xl md:text-3xl mb-10 text-center">You May Also Like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`group cursor-pointer reveal-animation`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-square mb-4 overflow-hidden bg-secondary">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="luxury-subtitle text-base mb-1">{product.name}</h3>
              <p className="text-sm font-light">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
