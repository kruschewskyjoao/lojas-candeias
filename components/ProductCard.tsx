
import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-72 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-brand-dark">{product.name}</h3>
        <p className="text-brand-primary font-bold text-xl mb-4">{product.price}</p>
        <button className="bg-brand-primary text-white font-bold py-2 px-6 rounded-full w-full hover:bg-brand-dark transition-colors">
          Comprar
        </button>
      </div>
    </div>
  );
};
