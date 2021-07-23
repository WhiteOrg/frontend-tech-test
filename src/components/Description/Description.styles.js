import styled from "styled-components";

export const Container = styled.section`
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 0 1.8rem;
  font-size: 1rem;
  letter-spacing: 0.02rem;
  line-height: 1.5rem;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 1.2rem;
    line-height: 1.8rem;
    padding: 0 3rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 0 4rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 1.6rem;
    line-height: 2.2rem;
    padding: 0 6rem;
  } ;
`;
