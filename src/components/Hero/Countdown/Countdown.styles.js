import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;

  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 1.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 2rem;
  } ;
`;

export const Elements = styled.span`
  display: inline-flex;
  margin: 0 4px;
`;

export const Span = styled.span`
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:nth-child(odd) {
    border: 2px solid #fff;
    height: 35px;
    width: 30px;
    color: #fff;
    position: relative;
    z-index: 1;
    margin-right: 8px;

    @media ${({ theme }) => theme.mediaQueries["tablet"]} {
      height: 38px;
      width: 27px;
    }
    @media ${({ theme }) => theme.mediaQueries["laptop"]} {
      height: 40px;
      width: 35px;
    }
    @media ${({ theme }) => theme.mediaQueries["desktop"]} {
      height: 45px;
      width: 40px;
    }
    &::after {
      content: "";
      width: 80%;
      border-bottom: 4px solid #4e757d;
      border-radius: 1rem;
      position: absolute;
      left: 10%;
      top: 50%;
      z-index: -1;
    }
  }
`;
