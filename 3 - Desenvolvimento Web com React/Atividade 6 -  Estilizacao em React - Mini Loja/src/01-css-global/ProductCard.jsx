import styles from './style/ProductCard.module.css';
import Skeleton from './Skeleton';
import Button from './Button';

// Função utilitária para formatar preço em BRL
const formatPrice = (v) => {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default function ProductCard({ product, onAdd, buttonVariant = 'solid', loading = false }) {
  const ratingLabel = product ? `${product.rating} de 5 estrelas` : 'Carregando';

  if (loading) {
    return <Skeleton />;
  }

  return (
    <article className={styles.card} aria-label={product.title}>
      <div className={styles.badges}>
        {product.tag && (
          <span className={styles.badge} aria-label={`Tag: ${product.tag}`}>
            {product.tag}
          </span>
        )}
      </div>

      <a href="#" className={styles.mediaLink} aria-label={`Ver detalhes de ${product.title}`}>
        <img
          className={styles.media}
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        />
      </a>

      <div className={styles.content}>
        <h2 className={styles.title} title={product.title}>
          {product.title}
        </h2>

        <p className={styles.price}>{formatPrice(product.price)}</p>

        <div className={styles.rating} role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(product.rating) ? '★' : '☆'}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <Button
            productId={product.id}
            onAdd={onAdd}
            variant={buttonVariant}
          />
        </div>
      </div>
    </article>
  );
}
