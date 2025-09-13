import Skeleton from "./Skeleton";
import Button from "./Button";
import styled from "styled-components";

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: var(--shadow-xs);
  transition: transform 200ms ease, box-shadow 200ms ease, opacity 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:focus-within {
    outline: 3px solid var(--color-focus);
    outline-offset: 4px;
  }
`;

const MediaLink = styled.a`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  display: block;
`;

const Media = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background: var(--color-skeleton);
  display: block;
  transition: opacity 200ms ease;
  height: auto;
`;

const Badges = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  gap: 6px;
  z-index: 2;
`;

const Badge = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 6px 8px;
  border-radius: 999px;
  background: var(--color-accent);
  color: #ffffff;
`;

const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 16px;
  line-height: 1.3;
  font-weight: 600;
  color: var(--color-fg-strong);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: var(--color-fg-strong);
`;

const Rating = styled.div`
  letter-spacing: 2px;
  color: var(--color-star);
  user-select: none;
`;

const Actions = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

const formatPrice = (v) => {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export default function ProductCard({
  product,
  onAdd,
  buttonVariant = "solid",
  loading = false,
}) {
  const ratingLabel = product
    ? `${product.rating} de 5 estrelas`
    : "Carregando";

  if (loading) {
    return <Skeleton />;
  }

  return (
    <Card aria-label={product.title}>
      <Badges>
        {product.tag && (
          <Badge aria-label={`Tag: ${product.tag}`}>{product.tag}</Badge>
        )}
      </Badges>

      <MediaLink href="#" aria-label={`Ver detalhes de ${product.title}`}>
        <Media
          src={product.image}
          alt={product.title}
          loading="lazy"
          width="512"
          height="512"
        />
      </MediaLink>

      <Content>
        <Title title={product.title}>{product.title}</Title>
        <Price>{formatPrice(product.price)}</Price>

        <Rating role="img" aria-label={ratingLabel}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(product.rating) ? "★" : "☆"}
            </span>
          ))}
        </Rating>

        <Actions>
          <Button
            productId={product.id}
            onAdd={onAdd}
            variant={buttonVariant}
          />
        </Actions>
      </Content>
    </Card>
  );
}