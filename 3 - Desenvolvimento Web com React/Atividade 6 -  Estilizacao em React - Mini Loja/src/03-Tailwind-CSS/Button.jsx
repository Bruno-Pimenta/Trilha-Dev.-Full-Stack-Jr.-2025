import { useState } from "react";

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

  const baseClasses =
    "appearance-none border font-bold px-3 py-2 cursor-pointer outline-none transition-transform transition-colors transition-opacity duration-200 ease-in-out focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none rounded-lg";

  let variantClasses = "";
  if (variant === "solid") {
    variantClasses =
      "bg-red-600 text-white border-red-600 hover:bg-red-700 hover:-translate-y-0.5";
  } else if (variant === "outline") {
    variantClasses =
      "bg-transparent text-red-600 border-red-600 hover:bg-red-100 hover:-translate-y-0.5";
  } else if (variant === "ghost") {
    variantClasses =
      "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300 hover:-translate-y-0.5";
  }

  return (
    <button
      type="button"
      className={`${baseClasses} ${variantClasses}`}
      onClick={handleClick}
      disabled={pending}
      aria-disabled={pending || variant === "ghost"}
      aria-busy={pending}
    >
      {pending && variant !== "ghost" ? "Adicionando…" : "Adicionar"}
    </button>
  );
}
