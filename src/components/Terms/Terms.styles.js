import styled from "styled-components";
export const Container = styled.section`
  padding: 0 1.8rem 1.8rem;
  width: 100%;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    padding: 0 3rem 3rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    padding: 0 4rem 4rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    padding: 0 6rem 6rem;
  } ;
`;
export const Header = styled.header`
  padding: 1em 0;
  width: 100%;
`;
export const HeaderTypo = styled.h3`
  font-size: 2em;
`;

export const Wrapper = styled.ul`
  margin-left: 1rem;
`;

export const TermItem = styled.li`
  margin-left: 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  line-height: 1.5rem;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 1.4rem;
    line-height: 2rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 1.6rem;
    line-height: 2.2rem;
  } ;
`;
