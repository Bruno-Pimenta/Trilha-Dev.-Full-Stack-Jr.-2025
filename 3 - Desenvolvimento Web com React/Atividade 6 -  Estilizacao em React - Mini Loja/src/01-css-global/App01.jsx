import { useEffect, useMemo, useState } from 'react'; // Importa React e hooks
import { Routes, Route, Navigate } from 'react-router-dom'; // Rotas internas (sem BrowserRouter)
import Catalog from './pages/Catalog'; // Importa a página de catálogo
import styles from './style/App.module.css'; // Importa o CSS Module do App
import Navbar from './Navbar';

// Dados simulados dos produtos (reaproveitados no Catálogo)
const PRODUCTS = [
  { id: 1, title: 'Fone Bluetooth Pro Max com Cancelamento de Ruído', price: 499.9, rating: 4.6, tag: 'Novo', image: 'https://picsum.photos/seed/prod1/512' },
  { id: 2, title: 'Teclado Mecânico RGB Hot-Swap ABNT2', price: 329.0, rating: 4.8, tag: 'Promo', image: 'https://picsum.photos/seed/prod2/512' },
  { id: 3, title: 'Mouse Gamer 26k DPI com Sensor Óptico', price: 259.9, rating: 4.5, tag: 'Novo', image: 'https://picsum.photos/seed/prod3/512' },
  { id: 4, title: 'Monitor 27" 144Hz IPS QHD', price: 1899.0, rating: 4.7, tag: 'Promo', image: 'https://picsum.photos/seed/prod4/512' },
  { id: 5, title: 'Webcam 1080p com Microfone e Tampa de Privacidade', price: 189.0, rating: 4.3, tag: 'Novo', image: 'https://picsum.photos/seed/prod5/512' },
  { id: 6, title: 'Cadeira Ergonômica com Apoio Lombar', price: 1299.0, rating: 4.4, tag: 'Esgotado', image: 'https://picsum.photos/seed/prod6/512' }
];

// Função auxiliar para mapear tag para variante do botão
const buttonVariantFromTag = (tag) => {
  if (tag === 'Promo') return 'solid';
  if (tag === 'Novo') return 'outline';
  return 'ghost';
};

// Componente principal App01 (agora sem BrowserRouter)
export default function App01() {
  const [cartCount, setCartCount] = useState(0); // Estado global do carrinho
  const [theme, setTheme] = useState('light'); // Estado do tema atual

  // Efeito para aplicar tema salvo e atributo data-theme
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved === 'dark' ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  // Alterna tema com persistência
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  // Prepara produtos com variante de botão
  const productsWithVariant = useMemo(() => {
    return PRODUCTS.map(p => ({ ...p, buttonVariant: buttonVariantFromTag(p.tag) }));
  }, []);

  // Handler para adicionar ao carrinho
  const handleAdd = () => {
    setCartCount((c) => c + 1);
  };

  // Layout + rotas internas do App01 (index => Catalog)
  return (
    <div className={styles.page}>
      <Navbar // Navbar fixa
          cartCount={cartCount} // Quantidade do carrinho
          theme={theme} // Tema atual
          onToggleTheme={toggleTheme} // Alternância de tema
        /> {/* Fim Navbar */}
      <main className={styles.main} tabIndex={-1}>
        <Routes>
          <Route index element={<Catalog products={productsWithVariant} onAdd={handleAdd} />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </main>
    </div>
  );
}
