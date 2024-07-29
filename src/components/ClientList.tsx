import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Cliente {
  id: number;
  razaoSocial: string;
  cnpj: string;
  email: string;
}

const ClienteList: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    axios.get<Cliente[]>(`${process.env.REACT_APP_API_URL}/clientes`)
      .then(response => setClientes(response.data))
      .catch(error => console.error('Error fetching clients:', error));
  }, []);

  return (
    <div className="client-list">
      <h2>Lista de Clientes</h2>
      <button><Link to="/clientes/cadastro">Cadastrar Novo Cliente</Link></button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.razaoSocial}</td>
              <td>{cliente.cnpj}</td>
              <td>{cliente.email}</td>
              <td>
                <button><Link to={`/clientes/editar/${cliente.id}`}>Editar</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteList;

