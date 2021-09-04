import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    background-color: #091870;
  }
  
  html, body {
    height: 100%;
    box-sizing: border-box;
  }
  
  #root {
    display: flex;
    height: 100%;
    justify-content: center;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  * {
    font-family: "Barlow Condensed", serif;
  }
`;

export { GlobalStyles };
