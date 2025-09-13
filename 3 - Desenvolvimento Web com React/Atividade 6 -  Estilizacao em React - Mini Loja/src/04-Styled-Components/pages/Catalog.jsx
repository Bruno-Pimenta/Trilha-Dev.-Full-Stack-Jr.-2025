import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard.jsx';
import Skeleton from '../Skeleton.jsx';
import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 16px;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export default function Catalog({ products, onAdd }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid aria-label="Lista de produtos">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={'skeleton-' + i} />
          ))
        : products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={() => onAdd(p.id)}
              buttonVariant={p.buttonVariant}
            />
          ))}
    </Grid>
  );
}
