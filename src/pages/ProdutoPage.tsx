import React from 'react';
import ProdutoList from '../components/ProdutoList';

const ProdutosPage: React.FC = () => {
  return (
    <div className="page produtos-page">
      <h1>Produtos</h1>
      <ProdutoList />
    </div>
  );
};

export default ProdutosPage;
