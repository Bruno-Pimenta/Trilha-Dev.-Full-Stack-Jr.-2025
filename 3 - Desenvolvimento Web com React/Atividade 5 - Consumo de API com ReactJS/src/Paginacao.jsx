import React from "react";
import "./css/Paginacao.css";

const Paginacao = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="pagination pagination-text">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Anterior
      </button>
      <span>
        Página {page} de {totalPages}
      </span>
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Próxima
      </button>
    </div>
  );
};

export default Paginacao;
