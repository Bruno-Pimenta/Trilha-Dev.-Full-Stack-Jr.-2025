import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount, theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 border-b shadow-sm z-50 transition-colors duration-300 ${
        isDark
          ? "bg-gray-950 border-gray-800 text-gray-100"
          : "bg-white border-gray-300 text-gray-900"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 h-full flex justify-between items-center gap-4">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 font-bold"
          aria-label="Página inicial"
        >
          <span aria-hidden="true">🛍️</span>
          <strong>Mini Loja</strong>
        </NavLink>

        <nav className="inline-flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className={`relative inline-flex items-center gap-2 h-9 px-3 pl-10 rounded-full border ${
              isDark
                ? "bg-gray-900 border-gray-600 text-gray-100"
                : "bg-gray-100 border-gray-300 text-gray-900"
            }`}
            aria-label={
              isDark ? "Alternar para tema claro" : "Alternar para tema escuro"
            }
            aria-pressed={isDark}
          >
            <span
              className={`absolute top-1/2 left-1 w-6 h-6 rounded-full shadow-sm transform -translate-y-1/2 transition-transform ${
                isDark ? "translate-x-3 bg-red-600" : "bg-red-600"
              }`}
              aria-hidden="true"
            />
            <span className="font-semibold text-sm z-10">
              {isDark ? "Escuro" : "Claro"}
            </span>
          </button>

          <div
            role="status"
            aria-live="polite"
            aria-label="Itens no carrinho"
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 border ${
              isDark
                ? "bg-gray-800 border-gray-600 text-gray-100"
                : "bg-gray-100 border-gray-300 text-gray-900"
            }`}
          >
            <span aria-hidden="true">🛒</span>
            <span className="min-w-[1.5em] text-center font-bold">
              {cartCount}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
