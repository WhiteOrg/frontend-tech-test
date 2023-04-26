import styled, { css, createGlobalStyle } from "styled-components";

// Global styles
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #091870;
    height: auto;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: "Barlow Condensed", sans-serif;
    margin: 0;
  }
  ul{
    margin:0;
  }
`;

// Re-used elements styles
export const SectionHeader = styled.h1`
  height: 26px;
  font-size: 24px;
  line-height: 1.08;
  color: #091870;
  margin-bottom: 17px;
  @media screen and (min-width: 740px) {
    font-size: 28px;
  }
`;

export const Wrapper = styled.div`
  padding: 30px 20px 0px 20px;
  background-color: white;
  @media screen and (min-width: 740px) {
    padding: 38px 70px 0px 70px;
  }
  > ul {
    padding-left: 20px;
    font-size: 14px;
    line-height: 22px;
    font-family: "Roboto";
    @media screen and (min-width: 740px) {
      font-size: 16px;
    }
  }
  ${({ terms }) =>
    terms &&
    css`
      padding-bottom: 40px;
      @media screen and (min-width: 740px) {
        padding-bottom: 60px;
      }
    `}
`;

export const LoaderAndErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${window.visualViewport?.height}px;

  > img {
    height: 22px;
    margin: 5px;
  }
`;

//Loader style
export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #091870;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

//App styles
export const AppContainer = styled.div`
  max-width: 740px;
  min-width: 315px;
  @media screen and (min-width: 740px) {
    margin: 50px auto;
  }
`;
