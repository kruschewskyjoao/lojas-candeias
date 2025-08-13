
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Lojas', href: '#' },
    { name: 'Categorias', href: '#categories' },
    { name: 'Sobre Nós', href: '#' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center font-bold text-white text-xl font-serif">P</span>
          <span className="font-serif text-2xl font-bold text-brand-dark">Portal Candeias</span>
        </a>

        <div className="flex items-center justify-end flex-1">
          {/* Desktop Nav - alinhado à direita */}
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="font-semibold text-gray-600 hover:text-brand-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-brand-dark hover:bg-brand-accent" aria-label="Abrir menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
         <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col p-4 space-y-2">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} className="font-semibold text-gray-600 hover:text-brand-primary p-2 rounded-md hover:bg-brand-accent transition-colors">
                    {link.name}
                  </a>
                ))}
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
