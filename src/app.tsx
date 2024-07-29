import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ClientesPage from './pages/ClientesPage';
import ClienteEditPage from './pages/ClientesEditPage';
import ProdutosPage from './pages/ProdutoPage';
import ProdutoEditPage from './pages/ProdutoEditPage';
import PedidosPage from './pages/PedidoPage';
import PedidoEditPage from './pages/PedidoEditPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/clientes" element={<ClientesPage />} />
            <Route path="/clientes/cadastro" element={<ClienteEditPage />} />
            <Route path="/clientes/editar/:id" element={<ClienteEditPage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="/produtos/cadastro" element={<ProdutoEditPage />} />
            <Route path="/produtos/editar/:id" element={<ProdutoEditPage />} />
            <Route path="/pedidos" element={<PedidosPage />} />
            <Route path="/pedidos/cadastro" element={<PedidoEditPage />} />
            <Route path="/pedidos/editar/:id" element={<PedidoEditPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;


