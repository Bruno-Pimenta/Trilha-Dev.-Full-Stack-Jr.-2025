import ProductCard from "../ProductCard";

export default function Catalog({ products = [], onAdd }) {
  return (
    <section
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      aria-label="Lista de produtos"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </section>
  );
}
