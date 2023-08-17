import { keyframes, styled } from 'styled-components';

interface StyledSkeletonProps {
  height: string;
  width: string;
}

const wave = keyframes`
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: -150% 50%;
  }
`;

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 4px;

  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.gray[200]},
    ${({ theme }) => theme.colors.gray[50]},
    ${({ theme }) => theme.colors.gray[200]}
  );
  background-size: 300% 300%;
  animation: ${wave} 2s both infinite;
`;
