import styled from "styled-components";

export const Container = styled.h3`
  color: ${({ theme }) => theme.colors.textBlue};
  font-size: 1.5rem;
  font-weight: 500;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 2.5rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 3rem;
  } ;
`;
