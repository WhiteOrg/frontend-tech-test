import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 2em;
  position: relative;
`;

export const TitleH1 = styled.h1`
  font-size: 2.7rem;
  padding-right: 5rem;
  color: ${({ theme }) => theme.colors.textWhite};

  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 3.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 5rem;
  } ;
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  > img {
    @media ${({ theme }) => theme.mediaQueries["tablet"]} {
      height: 35px;
      width: 35px;
    }
    @media ${({ theme }) => theme.mediaQueries["laptop"]} {
      height: 40px;
      width: 40px;
    }
    @media ${({ theme }) => theme.mediaQueries["desktop"]} {
      height: 45px;
      width: 45px;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
