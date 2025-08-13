
import React, { useState } from 'react';

interface PromotionProps {
  promotion: {
    title: string;
    description: string;
    coupon: string;
    imageUrl: string;
  };
}

const Promotion: React.FC<PromotionProps> = ({ promotion }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promotion.coupon);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-brand-accent py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="md:w-1/2">
            <img src={promotion.imageUrl} alt="Promoção" className="w-full h-64 md:h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl text-brand-primary mb-4">{promotion.title}</h2>
            <p className="text-brand-dark mb-6">{promotion.description}</p>
            <div className="border-2 border-dashed border-brand-primary rounded-lg p-4 inline-flex items-center gap-4 cursor-pointer" onClick={copyToClipboard}>
              <span className="font-bold text-2xl text-brand-primary tracking-widest">{promotion.coupon}</span>
              <span className="text-sm font-semibold text-brand-dark">{copied ? 'Copiado!' : 'Copiar'}</span>
            </div>
            <p className="text-xs text-gray-500 mt-3">Clique no cupom para copiar e apresente na loja!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
