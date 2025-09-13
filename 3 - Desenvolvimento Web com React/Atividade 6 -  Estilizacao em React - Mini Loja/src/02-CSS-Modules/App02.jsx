import { useEffect, useMemo, useState } from 'react'; // Importa React e hooks
import { Routes, Route, Navigate } from 'react-router-dom'; // Rotas internas (sem BrowserRouter)
import Catalog from './pages/Catalog'; // Importa a página de catálogo
import styles from './style/App.module.css'; // Importa o CSS Module do App
import Navbar from './Navbar';

// Dados simulados dos produtos (reaproveitados no Catálogo)
const PRODUCTS = [
  { id: 1, title: 'Fantasy Medieval Clothing', price: 1299.9, rating: 4.6, tag: 'Novo', image: '/src/assets/fantasy medieval clothing.jpg' },
  { id: 2, title: 'Fantasy Royal Clothing', price: 329.0, rating: 4.8, tag: 'Promo', image: '/src/assets/fantasy royal clothing.jpg' },
  { id: 3, title: 'Futuristic Space Jacket', price: 259.9, rating: 4.5, tag: 'Novo', image: 'src/assets/futuristic space jacket.jpg' },
  { id: 4, title: 'Mystic Arts Blue Outfit', price: 1899.0, rating: 4.7, tag: 'Promo', image: 'src/assets/mystic arts blue outfit.jpg' },
  { id: 5, title: 'Mystic Arts Purple Outfit', price: 1899.0, rating: 4.3, tag: 'Novo', image: 'src/assets/mystic arts purple outfit.jpg' },
  { id: 6, title: 'Sci-fi Space Boots', price: 299.0, rating: 4.4, tag: 'Esgotado', image: 'src/assets/sci-fi space boots.jpg' }
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
