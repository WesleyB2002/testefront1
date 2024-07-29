import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface Produto {
  id?: number;
  descricao: string;
  valorVenda: number;
  estoque: number;
}

const ProdutoForm: React.FC = () => {
  const [produto, setProduto] = useState<Produto>({ descricao: '', valorVenda: 0, estoque: 0 });
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get<Produto>(`${process.env.REACT_APP_API_URL}/produtos/${id}`)
        .then(response => setProduto(response.data))
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      axios.put(`${process.env.REACT_APP_API_URL}/produtos/${id}`, produto)
        .then(() => navigate('/produtos'))
        .catch(error => console.error('Error updating product:', error));
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/produtos`, produto)
        .then(() => navigate('/produtos'))
        .catch(error => console.error('Error creating product:', error));
    }
  };

  return (
    <div className="product-form">
      <h2>{id ? 'Editar Produto' : 'Cadastrar Produto'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Descrição:
          <input
            type="text"
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Valor de Venda:
          <input
            type="number"
            name="valorVenda"
            value={produto.valorVenda}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Estoque:
          <input
            type="number"
            name="estoque"
            value={produto.estoque}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{id ? 'Salvar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
};

export default ProdutoForm;
