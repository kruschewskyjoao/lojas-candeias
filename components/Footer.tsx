import React from 'react';
import { WhatsappIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          
          {/* About Portal */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-2">Portal Candeias</h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Nossa missão é fortalecer o comércio local de Candeias, conectando lojistas e clientes de forma simples e moderna.
            </p>
          </div>

          {/* For Merchants */}
          <div>
            <h4 className="font-bold text-lg mb-4">Para Lojistas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Cadastre sua Loja</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Vantagens</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Fale Conosco</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Siga-nos</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" aria-label="WhatsApp do Portal" className="text-gray-300 hover:text-white"><WhatsappIcon className="w-7 h-7" /></a>
              <a href="#" aria-label="Instagram do Portal" className="text-gray-300 hover:text-white"><InstagramIcon className="w-7 h-7" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-30 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portal Candeias. Todos os direitos reservados.</p>
          <p>Desenvolvido com ♥ por <a href="#" className="font-semibold hover:text-white">Meta Mídia</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;