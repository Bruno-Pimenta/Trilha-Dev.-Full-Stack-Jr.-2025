// Barra de navegação fixa com navegação entre Catálogo e Kanban
import React from 'react'; // Importa React
import { NavLink } from 'react-router-dom'; // Importa NavLink para rotas ativas
import styles from './style/Navbar.module.css'; // Importa CSS Module

// Componente Navbar com props
export default function Navbar({ cartCount, theme, onToggleTheme }) { // Declara componente
  return ( // Retorna JSX
    <header className={styles.header}> {/* Cabeçalho fixo */}
      <div className={styles.content}> {/* Contêiner interno */}
        <NavLink to="/" className={styles.logo} aria-label="Página inicial"> {/* Link do logo para raiz */}
          <span aria-hidden="true">🛍️</span> {/* Ícone visual */}
          <strong>Mini Loja</strong> {/* Texto do logo */}
        </NavLink> {/* Fecha logo */}

        <nav className={styles.actions} aria-label="Ações e navegação"> {/* Ações à direita */}
          <button
            type="button" // Tipo de botão
            className={styles.themeToggle} // Classe do botão de tema
            onClick={onToggleTheme} // Alterna tema
            aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'} // Rótulo
            aria-pressed={theme === 'dark'} // Estado pressionado
          > {/* Abre botão */}
            <span className={styles.themeThumb} aria-hidden="true" /> {/* Polegar deslizante */}
            <span className={styles.themeText}> {/* Texto do toggle */}
              {theme === 'dark' ? 'Escuro' : 'Claro'} {/* Texto */}
            </span> {/* Fecha span */}
          </button> {/* Fecha botão tema */}

          <div className={styles.cart} role="status" aria-live="polite" aria-label="Itens no carrinho"> {/* Badge do carrinho */}
            <span className={styles.cartIcon} aria-hidden="true">🛒</span> {/* Ícone */}
            <span className={styles.cartCount}>{cartCount}</span> {/* Quantidade */}
          </div> {/* Fecha carrinho */}
        </nav> {/* Fecha ações */}
      </div> {/* Fecha contêiner */}
    </header> // Fecha cabeçalho
  ); // Fim do return
} // Fim do componente Navbar