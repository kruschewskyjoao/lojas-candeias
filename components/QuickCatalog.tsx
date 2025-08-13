
import React from 'react';
import { ProductCard, Product } from './ProductCard';

interface QuickCatalogProps {
  products: Product[];
}

const QuickCatalog: React.FC<QuickCatalogProps> = ({ products }) => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-10 text-brand-primary">Nosso Catálogo</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-1 transition-transform duration-300">
              <div className="relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 sm:h-64 object-cover" />
              </div>
              <div className="p-3 sm:p-4 text-center">
                <h3 className="font-semibold text-sm sm:text-base mb-1 text-brand-dark truncate">{product.name}</h3>
                <p className="text-brand-primary font-bold text-base sm:text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
          <button className="bg-brand-dark text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-primary transition-colors">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickCatalog;
