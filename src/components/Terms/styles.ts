import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 72px 60px 68px;
  flex: 1;
  width: 100%;

  @media (max-width: 375px) {
    padding: 0 20px 40px 21px;
  }
`;

export { StyledWrapper as Wrapper };
