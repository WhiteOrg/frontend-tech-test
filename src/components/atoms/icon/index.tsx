import styled, { keyframes, css } from "styled-components";

interface Props {
  readonly rotate?: number;
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const injectAnimation = css`
  animation: ${rotation} 2s linear infinite;
`;

const Icon = styled.img<Props>`
  cursor: pointer;
  transition: all 0.3s;
  ${({ rotate }) => rotate === 1 && injectAnimation}

  &:hover {
    opacity: 0.8;
    transform: scale(1.005);
  }

  &:active {
    opacity: 1;
    transform: scale(0.98);
  }
`;

export default Icon;
