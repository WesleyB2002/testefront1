import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>My App</h1>
      <nav>
        <Link to="/clientes">Clientes</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/pedidos">Pedidos</Link>
      </nav>
    </header>
  );
};

export default Header;
