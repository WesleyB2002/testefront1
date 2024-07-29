import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/pedidos">Pedidos</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
