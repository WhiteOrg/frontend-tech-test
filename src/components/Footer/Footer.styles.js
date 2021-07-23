import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding-top: 2em;
  padding-bottom: 4em;
  text-align: center;
  color: yellow;
  background: #4579fc;
  background: linear-gradient(#265bb6, #3d2d9b);
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 1rem;
  font-weight: 600;
  margin: 1em;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 1.4rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 1.6rem;
  }
`;

export const IconsWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    > img {
      height: 40px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    > img {
      height: 45px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    width: 140px;
    > img {
      height: 60px;
    }
  }
`;
