import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const SkeletonBase = styled.div`
  position: relative;
  background: var(--color-skeleton);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-skeleton-highlight),
      transparent
    );
    animation: ${shimmer} 1.2s infinite;
  }
`;

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
`;

const MediaSkeleton = styled(SkeletonBase)`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleSkeleton = styled(SkeletonBase)`
  width: 80%;
  height: 24px;
  border-radius: 6px;
`;

const PriceSkeleton = styled(SkeletonBase)`
  width: 40%;
  height: 20px;
  border-radius: 6px;
`;

const RatingSkeleton = styled(SkeletonBase)`
  width: 60%;
  height: 18px;
  border-radius: 6px;
`;

const Actions = styled.div``;

const ButtonSkeleton = styled(SkeletonBase)`
  width: 100%;
  height: 40px;
  border-radius: 12px;
`;

export default function Skeleton() {
  return (
    <Card aria-busy="true" aria-label="Produto carregando">
      <MediaSkeleton />
      <Content>
        <TitleSkeleton />
        <PriceSkeleton />
        <RatingSkeleton />
        <Actions>
          <ButtonSkeleton />
        </Actions>
      </Content>
    </Card>
  );
}