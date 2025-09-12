import { Routes, Route, Navigate } from 'react-router-dom'; // Importa componentes de roteamento
import App01 from './01-css-global/App01.jsx'; // Importa o app específico (sub-app)

// Entry point de rotas da aplicação — delega /01 para App01
function App() {
  return (
    <Routes> {/* Define as rotas principais */}
      <Route // Rota para App01 (todas as sub-rotas de App01 ficam dentro de /01/*)
        path="/01/*" // Caminho da aplicação de catálogo
        element={<App01 />} // Renderiza o App01
      /> {/* Fim da rota */}
      <Route path="/" element={<Navigate to="/01" replace />} /> {/* Redireciona raiz */}
      <Route path="*" element={<Navigate to="/01" replace />} /> {/* Curinga */}
    </Routes>
  );
}

export default App;
