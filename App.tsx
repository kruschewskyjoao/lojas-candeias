import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { FashionIcon, RestaurantIcon, BeautyIcon, ServicesIcon, VerifiedIcon } from './components/Icons';
import featuredStores from './data/stores.json';
import categories from './data/categories.json';
import StorePage from './pages/StorePage';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  FashionIcon,
  RestaurantIcon,
  BeautyIcon,
  ServicesIcon,
};

const CategoryCard: React.FC<{ category: typeof categories[0] }> = ({ category }) => {
  const IconComponent = iconMap[category.Icon];
  return (
    <a href="#" className="group block text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {IconComponent && <IconComponent className="w-16 h-16 mx-auto text-brand-primary group-hover:text-brand-secondary transition-colors" />}
      <h3 className="mt-4 font-semibold text-lg text-brand-dark">{category.name}</h3>
    </a>
  );
};

const StoreCard: React.FC<{ store: typeof featuredStores[0] }> = ({ store }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full cursor-pointer"
      onClick={() => navigate(`/loja/${store.id}`)}
      title={`Ver detalhes da loja ${store.name}`}
    >
      <img src={store.imageUrl} alt={`Fachada da loja ${store.name}`} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-brand-dark">{store.name}</h3>
              <p className="text-sm text-gray-600">{store.category}</p>
            </div>
            {store.verified && (
              <div className="flex-shrink-0 flex items-center gap-1 text-brand-primary" title="Lojista Verificado">
                <VerifiedIcon className="w-5 h-5" />
                <span className="text-xs font-semibold hidden sm:inline">Verificado</span>
              </div>
            )}
          </div>
        </div>
        <span className="mt-4 block w-full text-center bg-brand-primary text-white font-bold py-2 px-4 rounded-md hover:bg-brand-dark transition-colors">
          Visitar Loja
        </span>
      </div>
    </div>
  );
};

// --- Componente Principal da Aplicação (Homepage) ---

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-brand-light font-sans">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  {/* Seção de Categorias */}
                  <section id="categories" className="py-16 bg-brand-accent">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-serif text-center mb-10 text-brand-dark">Navegue por Categorias</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map(cat => <CategoryCard key={cat.id} category={cat} />)}
                      </div>
                    </div>
                  </section>
                  {/* Seção de Lojas em Destaque */}
                  <section id="featured-stores" className="py-16 bg-brand-light">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-serif text-center mb-10 text-brand-dark">Lojas em Destaque</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredStores.map(store => <StoreCard key={store.id} store={store} />)}
                      </div>
                    </div>
                  </section>
                </>
              }
            />
            <Route path="/loja/:storeId" element={<StorePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;