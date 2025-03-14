
import React, { useEffect } from 'react';
import LuxuryNavbar from '../components/LuxuryNavbar';
import ProductGallery from '../components/ProductGallery';
import ProductDetails from '../components/ProductDetails';
import SimilarProducts from '../components/SimilarProducts';
import LuxuryFooter from '../components/LuxuryFooter';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LuxuryNavbar />
      
      {/* Breadcrumbs */}
      <div className="luxury-container mt-24 mb-4">
        <div className="text-xs text-black/60 flex items-center pt-4">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-black transition-colors">Collections</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-black transition-colors">Eternal</a>
          <span className="mx-2">/</span>
          <span className="text-black">Ethereal Diamond Ring</span>
        </div>
      </div>
      
      {/* Product Section */}
      <main className="flex-1">
        <section className="py-8">
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <ProductGallery />
              <ProductDetails />
            </div>
          </div>
        </section>
        
        {/* Product Description Section */}
        <section className="py-16 bg-secondary">
          <div className="luxury-container max-w-3xl text-center">
            <h2 className="luxury-title text-2xl md:text-3xl mb-8">Craftsmanship</h2>
            <div className="space-y-6 luxury-text">
              <p>
                Each Ethereal Diamond Ring is meticulously crafted by our master artisans, 
                employing techniques refined over generations. The creation process begins with 
                the careful selection of the finest diamonds, each certified for exceptional cut, 
                clarity, and brilliance.
              </p>
              <p>
                Our 18k white gold undergoes a proprietary alloying process that ensures 
                exceptional durability without compromising its lustrous appearance. The setting, 
                a testament to precision engineering, securely cradles the diamond while 
                maximizing light reflection from every angle.
              </p>
              <p>
                The final piece undergoes rigorous quality inspection, ensuring that it meets 
                our exacting standards before it bears the LUMINEUX hallmark – a symbol of 
                uncompromising excellence in the world of fine jewelry.
              </p>
            </div>
          </div>
        </section>
        
        <SimilarProducts />
      </main>
      
      <LuxuryFooter />
    </div>
  );
};

export default Index;
