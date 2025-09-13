import { useState } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  border: 1px solid var(--color-border-strong);
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 180ms ease, opacity 180ms ease, background 180ms ease,
    color 180ms ease, border-color 180ms ease;
  outline: none;

  &:focus-visible {
    outline: 3px solid var(--color-focus);
    outline-offset: 2px;
  }

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $variant }) =>
    $variant === "solid" &&
    css`
      background: var(--color-accent);
      color: #ffffff;
      border-color: var(--color-accent);

      &:hover:not(:disabled) {
        transform: translateY(-1px);
      }
    `}

  ${({ $variant }) =>
    $variant === "outline" &&
    css`
      background: transparent;
      color: var(--color-accent);
      border-color: var(--color-accent);

      &:hover:not(:disabled) {
        transform: translateY(-1px);
        background: color-mix(in srgb, var(--color-accent) 10%, transparent);
      }
    `}

  ${({ $variant }) =>
    $variant === "ghost" &&
    css`
      background: var(--color-surface-2);
      color: var(--color-fg);
      border-color: var(--color-border);

      &:hover:not(:disabled) {
        transform: translateY(-1px);
        background: var(--color-surface-3);
      }
    `}
`;

export default function Button({ onAdd, productId, variant = "solid" }) {
  const [pending, setPending] = useState(false);

  const handleClick = () => {
    if (pending || variant === "ghost") return;

    setPending(true);
    setTimeout(() => {
      onAdd(productId);
      setPending(false);
    }, 600);
  };

  return (
    <StyledButton
      type="button"
      $variant={variant}
      onClick={handleClick}
      disabled={pending || variant === "ghost"}
      aria-disabled={pending || variant === "ghost"}
      aria-busy={pending}
    >
      {pending ? "Adicionando…" : "Adicionar"}
    </StyledButton>
  );
}
