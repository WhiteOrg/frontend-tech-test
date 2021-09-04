import { Flex } from "reflexbox";
import styled from "styled-components";

const StyledHeaderWrapper = styled(Flex)<{ backgroundImage: string }>`
  padding: 49px 25px 40px 69px;
  flex-direction: column;
  background: ${({ backgroundImage }) => `url(${backgroundImage}) no-repeat`};
  background-size: cover;
  width: 100%;

  @media (max-width: 375px) {
    padding: 20px 20px 30px 20px;
  }
`;

const StyledTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 30px;
  height: 30px;
  margin: 0 9px 0 10px;
  padding: 1px 4px 3px;
  border-radius: 6px;
  border: solid 2px #fff;
  color: white;
`;

export { StyledHeaderWrapper, StyledTime };
