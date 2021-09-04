import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

const StyledGame = styled.img<SpaceProps>`
  ${space};
  width: 190px;
  height: 130px;

  @media (max-width: 375px) {
    width: 160px;
    height: 109px;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px 15px;
  grid-template-areas:
    ". ."
    ". ."
    ". .";
  justify-content: center;

  @media (max-width: 375px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export { StyledGame, StyledGrid };
