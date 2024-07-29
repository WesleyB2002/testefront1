import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface Pedido {
  id?: number;
  clienteId: number;
  data: string;
  total: number;
}

const PedidoForm: React.FC = () => {
  const [pedido, setPedido] = useState<Pedido>({ clienteId: 0, data: '', total: 0 });
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get<Pedido>(`${process.env.REACT_APP_API_URL}/pedidos/${id}`)
        .then(response => setPedido(response.data))
        .catch(error => console.error('Error fetching order:', error));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPedido({ ...pedido, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      axios.put(`${process.env.REACT_APP_API_URL}/pedidos/${id}`, pedido)
        .then(() => navigate('/pedidos'))
        .catch(error => console.error('Error updating order:', error));
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/pedidos`, pedido)
        .then(() => navigate('/pedidos'))
        .catch(error => console.error('Error creating order:', error));
    }
  };

  return (
    <div className="order-form">
      <h2>{id ? 'Editar Pedido' : 'Cadastrar Pedido'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cliente ID:
          <input
            type="number"
            name="clienteId"
            value={pedido.clienteId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Data:
          <input
            type="date"
            name="data"
            value={pedido.data}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Total:
          <input
            type="number"
            name="total"
            value={pedido.total}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{id ? 'Salvar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
};

export default PedidoForm
