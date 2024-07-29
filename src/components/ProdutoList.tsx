import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Produto {
  id: number;
  descricao: string;
  valorVenda: number;
  estoque: number;
}

const ProdutoList: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    axios.get<Produto[]>(`${process.env.REACT_APP_API_URL}/produtos`)
      .then(response => setProdutos(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      <h2>Lista de Produtos</h2>
      <button><Link to="/produtos/cadastro">Cadastrar Novo Produto</Link></button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Valor de Venda</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.valorVenda}</td>
              <td>{produto.estoque}</td>
              <td>
                <button><Link to={`/produtos/editar/${produto.id}`}>Editar</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProdutoList;
