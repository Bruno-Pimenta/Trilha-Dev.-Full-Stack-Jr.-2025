import { Routes, Route, Navigate } from 'react-router-dom'; // Importa componentes de roteamento
import App02 from './02-CSS-Modules/App02.jsx'; // Importa o app específico (sub-app)
import App04 from './04-Styled-Components/App04.jsx'; // Importa o app específico (sub-app)

// Entry point de rotas da aplicação — delega /01 para App01
function App() {
  return (
    <Routes> {/* Define as rotas principais */}
      <Route // Rota para App01 (todas as sub-rotas de App01 ficam dentro de /01/*)
        path="/02" // Caminho da aplicação de catálogo
        element={<App02 />} // Renderiza o App02
      /> {/* Fim da rota */}
      <Route // Rota para App01 (todas as sub-rotas de App01 ficam dentro de /01/*)
        path="/04" // Caminho da aplicação de catálogo
        element={<App04 />} // Renderiza o App04
      /> {/* Fim da rota */}
      <Route path="/" element={<Navigate to="/02" replace />} /> {/* Redireciona raiz */}
      <Route path="*" element={<Navigate to="/02" replace />} /> {/* Curinga */}
    </Routes>
  );
}

export default App;
