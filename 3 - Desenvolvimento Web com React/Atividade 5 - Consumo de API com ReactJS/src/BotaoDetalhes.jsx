import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/BotaoDetalhes.css"; 

const BotaoDetalhes = ({ id }) => {
  const navigate = useNavigate();

  return (
    <button className="button-details" onClick={() => navigate(`/filme/${id}`)}>
      Ver detalhes
    </button>
  );
};

export default BotaoDetalhes;
