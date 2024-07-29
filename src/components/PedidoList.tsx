import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Pedido {
  id: number;
  clienteId: number;
  data: string;
  total: number;
}

const PedidoList: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    axios.get<Pedido[]>(`${process.env.REACT_APP_API_URL}/pedidos`)
      .then(response => setPedidos(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="order-list">
      <h2>Lista de Pedidos</h2>
      <button><Link to="/pedidos/cadastro">Cadastrar Novo Pedido</Link></button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente ID</th>
            <th>Data</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(pedido => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.clienteId}</td>
              <td>{pedido.data}</td>
              <td>{pedido.total}</td>
              <td>
                <button><Link to={`/pedidos/editar/${pedido.id}`}>Editar</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PedidoList;
