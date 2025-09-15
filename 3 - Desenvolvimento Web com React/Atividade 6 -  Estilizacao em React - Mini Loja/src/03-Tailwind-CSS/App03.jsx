import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Navbar from './Navbar';

const PRODUCTS = [
  { id: 1, title: 'Fantasy Medieval Clothing', price: 1299.9, rating: 4.6, tag: 'Novo', image: '/src/assets/fantasy medieval clothing.jpg' },
  { id: 2, title: 'Fantasy Royal Clothing', price: 329.0, rating: 4.8, tag: 'Promo', image: '/src/assets/fantasy royal clothing.jpg' },
  { id: 3, title: 'Futuristic Space Jacket', price: 259.9, rating: 4.5, tag: 'Novo', image: 'src/assets/futuristic space jacket.jpg' },
  { id: 4, title: 'Mystic Arts Blue Outfit', price: 1899.0, rating: 4.7, tag: 'Promo', image: 'src/assets/mystic arts blue outfit.jpg' },
  { id: 5, title: 'Mystic Arts Purple Outfit', price: 1899.0, rating: 4.3, tag: 'Novo', image: 'src/assets/mystic arts purple outfit.jpg' },
  { id: 6, title: 'Sci-fi Space Boots', price: 299.0, rating: 4.4, tag: 'Esgotado', image: 'src/assets/sci-fi space boots.jpg' }
];

const buttonVariantFromTag = (tag) => {
  if (tag === 'Promo') return 'solid';
  if (tag === 'Novo') return 'outline';
  return 'ghost';
};

export default function App03() { 
  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initial = saved === 'dark' ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const productsWithVariant = useMemo(() => {
    return PRODUCTS.map((p) => ({ ...p, buttonVariant: buttonVariantFromTag(p.tag) }));
  }, []);

  const handleAdd = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Navbar
        cartCount={cartCount}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="max-w-[1200px] mx-auto mt-20 mb-12 px-4 focus:outline-none" tabIndex={-1}>
        <Routes>
          <Route
            index
            element={<Catalog products={productsWithVariant} onAdd={handleAdd} />}
          />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </main>
    </div>
  );
}
