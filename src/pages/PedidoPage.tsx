import React from 'react';
import PedidoList from '../components/PedidoList';

const PedidosPage: React.FC = () => {
  return (
    <div className="page pedidos-page">
      <h1>Pedidos</h1>
      <PedidoList />
    </div>
  );
};

export default PedidosPage;
