import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  margin: 0 auto;
  width: 100%;
  height: auto;
  background: url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: cover;

  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    padding: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    padding: 4rem;
  }
  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    padding: 6rem;
  } ;
`;

export const StatsContainer = styled.div`
  display: inline-flex;
  margin-right: 20px;
  margin-top: 5rem;
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding: 1rem 4rem;
  width: 100%;
  max-width: 500px;
  border: none;
  justify-self: flex-end;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.textBlue};
  transition: 0.2s ease-in-out;
  border-radius: 0.2rem;

  @media ${({ theme }) => theme.mediaQueries["tablet"]} {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries["laptop"]} {
    font-size: 1.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries["desktop"]} {
    font-size: 1.6rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightYellow};
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;
