
import React from 'react';

interface LocationProps {
  location: {
    address: string;
    hours: string;
    mapUrl: string;
    locationImage: string;
  };
  paymentMethods: {
    name: string;
    icon: string;
  }[];
}

const Location: React.FC<LocationProps> = ({ location, paymentMethods }) => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-10 text-brand-primary">Visite Nossa Loja</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg text-brand-dark mb-2">Endereço</h3>
                <p className="text-brand-dark">{location.address}</p>
                <h3 className="font-bold text-lg text-brand-dark mt-4 mb-2">Horário de Funcionamento</h3>
                <p className="text-brand-dark">{location.hours}</p>
                <h3 className="font-bold text-lg text-brand-dark mt-4 mb-2">Formas de Pagamento</h3>
                <div className="flex items-center gap-4">
                  {paymentMethods.map(method => (
                    <div key={method.name} className="flex flex-col items-center">
                      <img src={method.icon} alt={method.name} className="h-8 w-8" />
                      <span className="text-xs mt-1 text-brand-dark">{method.name}</span>
                    </div>
                  ))}
                </div>
            </div>
            <img src={location.locationImage} alt="Fachada da loja" className="rounded-lg shadow-lg w-full h-48 object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
