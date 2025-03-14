
import React, { useState } from 'react';

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Placeholder image URLs and descriptions
  const images = [
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80",
      alt: "Ethereal Diamond Ring - Front View"
    },
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80",
      alt: "Ethereal Diamond Ring - Side View"
    },
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80",
      alt: "Ethereal Diamond Ring - Detail View"
    },
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80",
      alt: "Ethereal Diamond Ring - Worn View"
    }
  ];

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative aspect-square mb-4 overflow-hidden bg-white">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-black/10 border-t-black animate-spin"></div>
          </div>
          <img 
            src={images[selectedImage].url} 
            alt={images[selectedImage].alt}
            className="w-full h-full object-contain opacity-0 transition-opacity duration-500"
            onLoad={(e) => {
              (e.target as HTMLImageElement).classList.remove('opacity-0');
              (e.target as HTMLImageElement).classList.add('opacity-100');
            }}
          />
        </div>
      </div>
      
      {/* Thumbnail navigation */}
      <div className="flex space-x-2 mt-2">
        {images.map((image, index) => (
          <button 
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square w-20 border ${
              selectedImage === index ? 'border-black' : 'border-black/20'
            } transition-all duration-300 hover:border-black`}
          >
            <img 
              src={image.url} 
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
