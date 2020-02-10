import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.active};
    border-radius: 2.5px;
    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.active};
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    &::selection {
      background-color: ${({ theme }) => theme.colors.active};
      color: ${({ theme }) => theme.colors.primaryText};;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    font: 16px 'Roboto', sans-serif;
    font-weight: 400;

    background-color: ${({ theme }) => theme.colors.backgound};
    color: ${({ theme }) => theme.colors.primaryText};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body.using-mouse {
    * {
      outline: none !important;
    }
  }

  #gatsby-focus-wrapper {
    padding: 0 32px;
    margin: 0 auto;
    max-width: 1536px;
    min-height: 100%;
  }

  button {
    font: 16px 'Roboto', sans-serif;
    font-weight: 400;

    background: transparent;
    border: none;
  }

  a,
  button {
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  li {
    list-style-type: none;
  }
`;
