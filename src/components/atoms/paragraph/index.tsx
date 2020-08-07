import styled from "styled-components";

interface Props {
  readonly size: "small" | "medium" | "large";
  readonly bold: boolean;
  readonly textColor: string;
}

const Paragraph = styled.p<Props>`
  ${({ size }) => {
    if (size === "small") return "font-size: 14px";
    else if (size === "large") return "font-size: 24px";
    else return "font-size: 16px";
  }};
  font-weight: ${({ bold }) => (bold ? "bolder" : "600")};
  color: ${(props) => props.textColor || "black"};
`;

export default Paragraph;
