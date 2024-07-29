import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface Cliente {
  id?: number;
  razaoSocial: string;
  cnpj: string;
  email: string;
}

const ClienteForm: React.FC = () => {
  const [cliente, setCliente] = useState<Cliente>({ razaoSocial: '', cnpj: '', email: '' });
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get<Cliente>(`${process.env.REACT_APP_API_URL}/clientes/${id}`)
        .then(response => setCliente(response.data))
        .catch(error => console.error('Error fetching client:', error));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      axios.put(`${process.env.REACT_APP_API_URL}/clientes/${id}`, cliente)
        .then(() => navigate('/clientes'))
        .catch(error => console.error('Error updating client:', error));
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/clientes`, cliente)
        .then(() => navigate('/clientes'))
        .catch(error => console.error('Error creating client:', error));
    }
  };

  return (
    <div className="client-form">
      <h2>{id ? 'Editar Cliente' : 'Cadastrar Cliente'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Razão Social:
          <input
            type="text"
            name="razaoSocial"
            value={cliente.razaoSocial}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          CNPJ:
          <input
            type="text"
            name="cnpj"
            value={cliente.cnpj}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{id ? 'Salvar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
};

export default ClienteForm;
