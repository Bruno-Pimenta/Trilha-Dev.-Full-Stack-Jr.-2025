import React from "react";
import { useNavigate } from "react-router-dom";

const BotaoDetalhes = ({ id }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/filme/${id}`)}>
      Ver detalhes
    </button>
  );
};

export default BotaoDetalhes;
