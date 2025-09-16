import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard.jsx";
import Skeleton from "../Skeleton.jsx";

export default function Catalog({ products, onAdd }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      aria-label="Lista de produtos"
    >
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={"skeleton-" + i} />
          ))
        : products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={() => onAdd(p.id)}
              buttonVariant={p.buttonVariant}
            />
          ))}
    </section>
  );
}
