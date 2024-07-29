import React from 'react';
import ProdutoForm from '../components/ProdutoForm';

const ProdutoEditPage: React.FC = () => {
  return (
    <div className="page produto-edit-page">
      <h1>{window.location.pathname.includes('editar') ? 'Editar Produto' : 'Cadastrar Produto'}</h1>
      <ProdutoForm />
    </div>
  );
};

export default ProdutoEditPage;

