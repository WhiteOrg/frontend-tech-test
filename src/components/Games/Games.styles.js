import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  padding: 1.8rem;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    padding: 1.5rem 3rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    padding: 2rem 4rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    padding: 3rem 6rem;
  } ;
`;

export const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 15px;
  margin-top: 15px;
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
