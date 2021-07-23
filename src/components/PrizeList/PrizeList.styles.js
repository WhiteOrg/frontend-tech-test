import styled from "styled-components";

export const Container = styled.section`
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
export const Heading = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;

  > img {
    @media ${({ theme }) => theme.mediaQueries["tablet"]} {
      height: 25px;
      width: 25px;
    }
    @media ${({ theme }) => theme.mediaQueries["laptop"]} {
      height: 30px;
      width: 30px;
    }
    @media ${({ theme }) => theme.mediaQueries["desktop"]} {
      height: 40px;
      width: 40px;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  border-top: 4px solid #f3f2fd;
  border-bottom: 4px solid #f3f2fd;
  padding: 20px 0;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    border-top: 4.5px solid #f3f2fd;
    border-bottom: 4.5px solid #f3f2fd;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    border-top: 5px solid #f3f2fd;
    border-bottom: 5px solid #f3f2fd;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    border-top: 6px solid #f3f2fd;
    border-bottom: 6px solid #f3f2fd;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: calc((6 * 35px) - 1px);
  overflow-y: scroll;
  position: relative;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    height: calc((6 * 40px) - 1px);
  }

  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    height: calc((6 * 45px) - 1px);
  }

  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    height: calc((6 * 50px) - 1px);
  }

  &::-webkit-scrollbar {
    width: 4px;
    @media ${({ theme }) => theme.mediaQueries["tablet"]} {
      width: 4.5px;
    }
    @media ${({ theme }) => theme.mediaQueries["laptop"]} {
      width: 5px;
    }
    @media ${({ theme }) => theme.mediaQueries["desktop"]} {
      width: 6px;
    }
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f9cb11;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f3f2fd;
  }
`;

export const ListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  height: 35px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3f2fd;
  margin-right: 1.5rem;
  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 1.2rem;
    height: 40px;
  }
  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 1.4rem;
    height: 45px;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 1.6rem;
    height: 50px;
  }
`;

export const Index = styled.span`
  display: block;
  width: 50px;
`;
export const Title = styled.span`
  display: block;
`;
export const Prize = styled.span`
  display: block;
  flex: 1;
  text-align: right;
`;
