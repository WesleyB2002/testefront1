import React from 'react';
import ClienteForm from '../components/ClientForm';

const ClienteEditPage: React.FC = () => {
  return (
    <div className="page cliente-edit-page">
      <h1>{window.location.pathname.includes('editar') ? 'Editar Cliente' : 'Cadastrar Cliente'}</h1>
      <ClienteForm />
    </div>
  );
};

export default ClienteEditPage;

