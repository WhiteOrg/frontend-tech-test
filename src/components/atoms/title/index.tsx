import styled from "styled-components";

interface Props {
  readonly color?: string;
}

const TitleH1 = styled.h1<Props>`
  font-size: 34px;
  line-height: 35px;
  font-weight: 500;
  color: ${(props) => props.color || "white"};
`;

const TitleH2 = styled.h2<Props>`
  font-size: 24px;
  line-height: 26px;
  font-weight: 600;
  color: ${(props) => props.color || "white"};
`;

export { TitleH1, TitleH2 };
