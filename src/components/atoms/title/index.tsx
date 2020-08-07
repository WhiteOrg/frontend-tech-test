import styled from "styled-components";

interface Props {
  readonly textColor: string;
}

const TitleH1 = styled.h1<Props>`
  font-size: 34px;
  line-height: 35px;
  font-weight: 500;
  color: ${(props) => props.textColor || "white"};
`;

const TitleH2 = styled.h2<Props>`
  font-size: 24px;
  line-height: 26px;
  font-weight: 600;
  color: ${(props) => props.textColor || "white"};
`;

export { TitleH1, TitleH2 };
