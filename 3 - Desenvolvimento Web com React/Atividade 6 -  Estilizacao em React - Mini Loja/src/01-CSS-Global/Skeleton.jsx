import React from "react";
import "./style/Skeleton.css";

export default function Skeleton() {
  return (
    <article
      className="skeleton-card"
      aria-busy="true"
      aria-label="Produto carregando"
    >
      <div className="skeleton-media skeleton" />
      <div className="skeleton-content">
        <div className="skeleton-title skeleton" />
        <div className="skeleton-price skeleton" />
        <div className="skeleton-rating skeleton" />
        <div className="skeleton-button skeleton" />
      </div>
    </article>
  );
}
