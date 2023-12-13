import styled, { keyframes } from 'styled-components';

interface ShibLoaderProps {
  size?: string;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledImg = styled.img<{ size: string }>`
  animation: 2s ${rotate} linear infinite;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

export default function ShibLoader({ size = '21px' }: ShibLoaderProps) {
  return <StyledImg src="/icons/loader.svg" size={size} />;
}
