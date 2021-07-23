import styled from "styled-components";

export const Container = styled.div`
  margin-right: 1.5rem;
`;

export const TitleH2 = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textAqua};
  text-transform: uppercase;

  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 1.3rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 1.4rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 1.5rem;
  } ;
`;

export const UserImage = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #fff;
  font-weight: 600;
  font-size: 2rem;

  > img {
    @media ${({ theme }) => theme.mediaQueries["tablet"]} {
      height: 24px;
    }
    @media ${({ theme }) => theme.mediaQueries["laptop"]} {
      height: 26px;
    }
    @media ${({ theme }) => theme.mediaQueries["desktop"]} {
      height: 28px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 2.2rem;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 2.4rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 2.5rem;
  } ;
`;
