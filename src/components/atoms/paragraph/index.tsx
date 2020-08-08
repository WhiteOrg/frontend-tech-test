import styled from "styled-components";

interface Props {
  readonly size: "small" | "medium" | "large";
  readonly textColor: string;
  readonly upperCase?: boolean;
  readonly bold?: boolean;
}

const Paragraph = styled.p<Props>`
  ${({ size }) => {
    if (size === "small") return "font-size: 14px";
    else if (size === "large") return "font-size: 24px";
    else return "font-size: 16px";
  }};
  font-weight: ${({ bold }) => (bold ? "bolder" : "600")};
  color: ${({ textColor }) => textColor || "black"};
  text-transform: ${({ upperCase }) =>
    upperCase ? "uppercase" : "capitalize"};
`;

export default Paragraph;
