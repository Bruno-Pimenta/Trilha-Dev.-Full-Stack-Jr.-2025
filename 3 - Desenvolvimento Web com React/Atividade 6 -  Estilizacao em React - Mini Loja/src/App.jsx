import { Routes, Route, Navigate } from 'react-router-dom'; // Importa componentes de roteamento
import App01 from './01-CSS-Global/App01.jsx';
import App02 from './02-CSS-Modules/App02.jsx'; // Importa o app específico (sub-app)
import App03 from './03-Tailwind-CSS/App03.jsx'; 
import App04 from './04-Styled-Components/App04.jsx'; // Importa o app específico (sub-app)

function App() {
  return (
    <Routes> {/* Define as rotas principais */}
      <Route // Rota para App01 (todas as sub-rotas de App01 ficam dentro de /01/*)
        path="/01" // Caminho da aplicação de catálogo
        element={<App01 />} // Renderiza o App02
      /> {/* Fim da rota */}
      <Route // Rota para App01 (todas as sub-rotas de App01 ficam dentro de /01/*)
        path="/02" // Caminho da aplicação de catálogo
        element={<App02 />} // Renderiza o App02
      /> {/* Fim da rota */}
      <Route // Rota para App01 (todas as sub-rotas de App01 ficam dentro de /01/*)
        path="/03" // Caminho da aplicação de catálogo
        element={<App03 />} // Renderiza o App02
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
