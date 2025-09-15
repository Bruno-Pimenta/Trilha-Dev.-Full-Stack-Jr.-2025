import Skeleton from "./Skeleton";
import Button from "./Button";
import "./style/ProductCard.css";

// Função utilitária para formatar preço em BRL
const formatPrice = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ProductCard({ product, onAdd, buttonVariant = "solid", loading = false }) {
  const ratingLabel = product ? `${product.rating} de 5 estrelas` : "Carregando";

  if (loading) {
    return <Skeleton />;
  }

  // Ajusta a variante do botão para 'ghost' se o produto estiver esgotado
  const variant = product.tag === "Esgotado" ? "ghost" : buttonVariant;

  return (
    <article className="product-card" aria-label={product.title}>
      {/* Badges */}
      <div className="product-badges">
        {product.tag && (
          <span className="product-badge" aria-label={`Tag: ${product.tag}`}>
            {product.tag}
          </span>
        )}
      </div>

      {/* Imagem */}
      <a
        href="#"
        className="product-media-link"
        aria-label={`Ver detalhes de ${product.title}`}
      >
        <img
          className="product-media"
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        />
      </a>

      {/* Conteúdo */}
      <div className="product-content">
        <h2 className="product-title" title={product.title}>
          {product.title}
        </h2>

        <p className="product-price">{formatPrice(product.price)}</p>

        <div className="product-rating" role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(product.rating) ? "★" : "☆"}
            </span>
          ))}
        </div>

        <div className="product-actions">
          <Button productId={product.id} onAdd={onAdd} variant={variant} />
        </div>
      </div>
    </article>
  );
}
