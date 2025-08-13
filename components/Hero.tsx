
import React from 'react';
import { SearchIcon } from './Icons';

const Hero: React.FC = () => {
  // Usando uma imagem genérica que remete a uma cidade vibrante
  const heroImage = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop";

  return (
    <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center text-white flex flex-col justify-center items-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
          O melhor de Candeias, a um clique de distância.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Encontre lojas, produtos e serviços na nossa cidade. Apoie o comércio local!
        </p>
        <div className="max-w-xl mx-auto">
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-input" className="sr-only">Buscar por loja ou produto</label>
            <input
              id="search-input"
              type="search"
              placeholder="Buscar por loja ou produto..."
              className="w-full py-4 px-6 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-brand-secondary focus:ring-opacity-50"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-primary h-12 w-12 rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors"
            >
              <SearchIcon className="w-6 h-6 text-white" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
