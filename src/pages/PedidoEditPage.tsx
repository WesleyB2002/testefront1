import React from 'react';
import PedidoForm from '../components/PedidoForm';

const PedidoEditPage: React.FC = () => {
  return (
    <div className="page pedido-edit-page">
      <h1>{window.location.pathname.includes('editar') ? 'Editar Pedido' : 'Cadastrar Pedido'}</h1>
      <PedidoForm />
    </div>
  );
};

export default PedidoEditPage;
