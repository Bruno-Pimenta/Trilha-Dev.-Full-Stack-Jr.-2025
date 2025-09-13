import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Catalog from './pages/Catalog';
import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: var(--color-bg);
    color: var(--color-fg);
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  }

  :root {
    --color-bg: #f7f7f8;
    --color-fg: #111114;
    --color-fg-strong: #0a0a0d;
    --color-surface: #ffffff;
    --color-surface-2: #f1f1f3;
    --color-surface-3: #e7e7ea;
    --color-border: #dcdce1;
    --color-border-strong: #bdbdc7;
    --color-accent: #e53935;
    --color-focus: #8e24aa;
    --color-star: #e6b800;
    --color-skeleton: #e9e9ee;
    --color-skeleton-highlight: #ffffffa6;
    --shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
    --shadow-sm: 0 2px 6px rgba(0,0,0,0.06);
    --shadow-md: 0 8px 24px rgba(0,0,0,0.12);
  }

  [data-theme='dark'] {
    --color-bg: #0e0f12;
    --color-fg: #e9e9ef;
    --color-fg-strong: #ffffff;
    --color-surface: #15161a;
    --color-surface-2: #1b1c22;
    --color-surface-3: #22242b;
    --color-border: #2a2c34;
    --color-border-strong: #3b3e48;
    --color-accent: #ef5350;
    --color-focus: #ba68c8;
    --color-star: #f48fb1;
    --color-skeleton: #1c1d24;
    --color-skeleton-highlight: #2a2c34;
    --shadow-xs: 0 1px 2px rgba(0,0,0,0.4);
    --shadow-sm: 0 2px 6px rgba(0,0,0,0.5);
    --shadow-md: 0 8px 24px rgba(0,0,0,0.6);
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme='light']) {
      color-scheme: dark;
    }
  }

  :root, [data-theme='dark'] {
    color-scheme: light dark;
  }
`;

const Page = styled.div`
  min-height: 100dvh;
  background: var(--color-bg);
  color: var(--color-fg);
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 80px auto 48px;
  padding: 0 16px;
`;


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

export default function App01() {
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
    return PRODUCTS.map((p) => ({
      ...p,
      buttonVariant: buttonVariantFromTag(p.tag),
    }));
  }, []);

  const handleAdd = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <Page>
      <GlobalStyle />
      <Navbar
        cartCount={cartCount}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <Main tabIndex={-1}>
        <Routes>
          <Route
            index
            element={<Catalog products={productsWithVariant} onAdd={handleAdd} />}
          />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
      </Main>
    </Page>
  );
}
