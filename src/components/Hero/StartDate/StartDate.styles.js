import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.5rem 0;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 1.1rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 1.3rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 1.5rem;
  } ;
`;

export const Span = styled.div`
  margin-left: 0.8rem;
`;
