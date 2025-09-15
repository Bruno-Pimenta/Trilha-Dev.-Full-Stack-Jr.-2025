import ProductCard from "../ProductCard";
import "../style/Catalog.css";

export default function Catalog({ products = [], onAdd }) {
  return (
    <section className="grid" aria-label="Lista de produtos">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </section>
  );
}
