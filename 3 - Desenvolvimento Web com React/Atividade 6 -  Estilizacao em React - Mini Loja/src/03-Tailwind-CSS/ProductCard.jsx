import Skeleton from "./Skeleton";
import Button from "./Button";

const formatPrice = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ProductCard({ product, onAdd, buttonVariant = "solid", loading = false }) {
  const ratingLabel = product ? `${product.rating} de 5 estrelas` : "Carregando";

  if (loading) {
    return <Skeleton />;
  }

  const variant = product.tag === "Esgotado" ? "ghost" : buttonVariant;

  return (
    <article className="relative flex flex-col bg-surface border border-border rounded-2xl shadow-xs transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md" aria-label={product.title}>
      
      <div className="absolute top-2 left-2 flex gap-1.5 z-20">
        {product.tag && (
          <span className="text-xs font-bold px-2 py-1 rounded-full bg-accent text-white" aria-label={`Tag: ${product.tag}`}>
            {product.tag}
          </span>
        )}
      </div>

      <a href="#" className="overflow-hidden rounded-t-2xl" aria-label={`Ver detalhes de ${product.title}`}>
        <img
          className="w-full aspect-square object-cover bg-skeleton block transition-opacity duration-200"
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        />
      </a>

      <div className="p-3 flex flex-col gap-2">
        <h2 className="text-base font-semibold text-fg-strong line-clamp-2" title={product.title}>
          {product.title}
        </h2>

        <p className="text-lg font-bold text-fg-strong">{formatPrice(product.price)}</p>

        <div className="tracking-wide text-star select-none" role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(product.rating) ? "★" : "☆"}
            </span>
          ))}
        </div>

        <div className="mt-1 flex items-center">
          <Button productId={product.id} onAdd={onAdd} variant={variant} />
        </div>
      </div>
    </article>
  );
}
