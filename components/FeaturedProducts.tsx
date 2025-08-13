
import React from 'react';
import { ProductCard, Product } from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-10 text-brand-primary">Destaques da Semana</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-brand-dark text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-primary transition-colors">
            Ver Mais Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
