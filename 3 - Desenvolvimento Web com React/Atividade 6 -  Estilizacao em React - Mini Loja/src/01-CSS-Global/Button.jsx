import { useState } from "react";
import "./style/Button.css";

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
    <button
      type="button"
      className={`button ${variant}`}
      onClick={handleClick}
      disabled={pending || variant === "ghost"}
      aria-disabled={pending || variant === "ghost"}
      aria-busy={pending}
    >
      {pending ? "Adicionando…" : "Adicionar"}
    </button>
  );
}
