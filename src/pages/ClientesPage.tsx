import React from 'react';
import ClienteList from '../components/ClientList';

const ClientesPage: React.FC = () => {
  return (
    <div className="page clientes-page">
      <h1>Clientes</h1>
      <ClienteList />
    </div>
  );
};

export default ClientesPage;


