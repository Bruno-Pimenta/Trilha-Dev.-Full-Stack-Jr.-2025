import React from "react";

export default function Skeleton() {
  return (
    <article
      className="relative flex flex-col bg-surface border border-border rounded-2xl overflow-hidden"
      aria-busy="true"
      aria-label="Produto carregando"
    >
      <div className="w-full aspect-square bg-skeleton relative overflow-hidden shimmer" />

      <div className="p-3 flex flex-col gap-2">
        <div className="h-6 w-4/5 rounded-md bg-skeleton relative overflow-hidden shimmer" />
        <div className="h-5 w-2/5 rounded-md bg-skeleton relative overflow-hidden shimmer" />
        <div className="h-4 w-3/5 rounded-md bg-skeleton relative overflow-hidden shimmer" />
        <div className="h-10 w-full rounded-xl bg-skeleton relative overflow-hidden shimmer" />
      </div>
    </article>
  );
}
