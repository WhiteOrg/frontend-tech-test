import styled from "styled-components";

const Button = styled.button`
  border-radius: 1px;
  background-color: #f9cb11;
  max-width: 100%;
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  padding: 15px;
  text-transform: uppercase;
  color: #0a0052;
  font-weight: 600;
  letter-spacing: 1.88px;
  border-radius: 1px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    border: none;
    outline: 0;
  }

  &:hover {
    opacity: 0.6;
    transform: scale(1.005);
  }

  &:active {
    opacity: 1;
    transform: scale(0.98);
  }
`;

export default Button;
