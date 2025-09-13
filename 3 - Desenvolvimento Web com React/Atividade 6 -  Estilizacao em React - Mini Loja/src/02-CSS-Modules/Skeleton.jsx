// Componente Skeleton para card de produto em estado de loading
import React from 'react'; // Importa React
import styles from './style/Skeleton.module.css'; // Reaproveita o mesmo CSS Module

// Componente Skeleton
export default function Skeleton() { // Declara o componente Skeleton
  return ( // Retorna JSX do esqueleto
    <article className={styles.card} aria-busy="true" aria-label="Produto carregando"> {/* Elemento semântico article para o card */}
      <div className={`${styles.media} ${styles.skeleton}`} /> {/* Área de imagem como skeleton */}
      <div className={`${styles.content}`}> {/* Área de conteúdo */}
        <div className={`${styles.title} ${styles.skeleton}`} /> {/* Título skeleton */}
        <div className={`${styles.price} ${styles.skeleton}`} /> {/* Preço skeleton */}
        <div className={`${styles.rating} ${styles.skeleton}`} /> {/* Rating skeleton */}
        <div className={`${styles.actions}`}> {/* Área de ações */}
          <div className={`${styles.button} ${styles.skeleton}`} /> {/* Botão skeleton */}
        </div> {/* Fecha ações */}
      </div> {/* Fecha conteúdo */}
    </article> // Fecha o article skeleton
  ); // Finaliza retorno
} // Fim do componente Skeleton
