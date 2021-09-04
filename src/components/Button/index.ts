import styled from "styled-components";
import { TButton } from "./types";

const StyledButton = styled.button<TButton>`
  background-color: ${({ theme, color = "yellow" }) => theme.colors[color]};
  min-height: 48px;
  border: none;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2.5px;
  width: 300px;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export { StyledButton as Button };
