import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  inset-inline: 0;
  height: 64px;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
  box-shadow: var(--shadow-sm);
`;

const Content = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Logo = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-fg-strong);
  text-decoration: none;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const Actions = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

const ThemeToggle = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 10px 0 40px;
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  cursor: pointer;
  color: var(--color-fg);
  transition: transform 200ms ease, opacity 200ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
  }
`;

const ThemeText = styled.span`
  font-size: 14px;
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const ThemeThumb = styled.span`
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: var(--shadow-sm);
  transition: transform 200ms ease;

  [data-theme='dark'] & {
    transform: translate(10px, -50%);
  }
`;

const Cart = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 6px 10px;
`;

const CartIcon = styled.span`
  font-size: 16px;
`;

const CartCount = styled.span`
  min-width: 1.5em;
  text-align: center;
  font-weight: 700;
  color: var(--color-fg-strong);
`;

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  return (
    <Header>
      <Content>
        <Logo to="/" aria-label="Página inicial">
          <span aria-hidden="true">🛍️</span>
          <strong>Mini Loja</strong>
        </Logo>

        <Actions aria-label="Ações e navegação">
          <ThemeToggle
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Alternar para tema claro'
                : 'Alternar para tema escuro'
            }
            aria-pressed={theme === 'dark'}
          >
            <ThemeThumb aria-hidden="true" />
            <ThemeText>{theme === 'dark' ? 'Escuro' : 'Claro'}</ThemeText>
          </ThemeToggle>

          <Cart role="status" aria-live="polite" aria-label="Itens no carrinho">
            <CartIcon aria-hidden="true">🛒</CartIcon>
            <CartCount>{cartCount}</CartCount>
          </Cart>
        </Actions>
      </Content>
    </Header>
  );
}
