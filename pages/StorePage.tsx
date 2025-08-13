import React from "react";
import { useParams } from "react-router-dom";
import stores from "../data/stores.json";

const StorePage: React.FC = () => {
  const { storeId } = useParams();
  const store = stores.find((s) => String(s.id) === storeId);

  if (!store) {
    return <div>Loja não encontrada.</div>;
  }

  return (
    <div className="store-page">
      <h1>{store.name}</h1>
      <img src={store.imageUrl} alt={store.name} className="store-image" />
      <p>Categoria: {store.category}</p>
      <p>Status: {store.verified ? "Verificada" : "Não verificada"}</p>
      {/* Adicione mais detalhes da loja conforme necessário */}
    </div>
  );
};

export default StorePage;
