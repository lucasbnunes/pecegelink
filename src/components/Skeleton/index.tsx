import { StyledSkeleton } from "./styles";

interface SkeletonProps {
  height?: string;
  width?: string;
}

export function Skeleton({ height = '30px', width = '100%' }: SkeletonProps) {
  return <StyledSkeleton height={height} width={width}></StyledSkeleton>
}