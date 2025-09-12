import { useState } from 'react';
import styles from './style/Button.module.css';

export default function Button({ onAdd, productId, variant = 'solid' }) {
  const [pending, setPending] = useState(false);

  const handleClick = () => {
    // Impede clique se já está pending ou se a variante for ghost
    if (pending || variant === 'ghost') return;

    setPending(true);
    setTimeout(() => {
      onAdd(productId);
      setPending(false);
    }, 600);
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]}`}
      onClick={handleClick}
      disabled={pending || variant === 'ghost'} // Desabilita visualmente também
      aria-disabled={pending || variant === 'ghost'}
      aria-busy={pending}
    >
      {pending ? 'Adicionando…' : 'Adicionar'}
    </button>
  );
}
