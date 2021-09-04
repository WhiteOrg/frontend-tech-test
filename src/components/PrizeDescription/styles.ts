import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: white;
  padding: 0 72px 30px 68px;

  @media (max-width: 375px) {
    padding: 0 21px 30px 20px;
  }
`;

export { StyledWrapper as Wrapper };
