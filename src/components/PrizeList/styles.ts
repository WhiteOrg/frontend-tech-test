import styled from "styled-components";

const StyledSeparator = styled.div`
  height: 5px;
  background-color: #f5f4fe;
  margin: 15px 0;
`;

const StyledWrapper = styled.div`
  background-color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 38px 72px 45px 68px;

  @media (max-width: 375px) {
    padding: 30px 20px 30px 21px;
  }
`;

export { StyledSeparator, StyledWrapper };
