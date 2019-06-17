import { createGlobalStyle } from "styled-components/macro"

import "./normalize.css"

// @import url('https://fonts.googleapis.com/css?family=Kanit:400,900i&display=swap');

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: inherit;
    outline: inherit;
  }

  html {
    box-sizing: border-box;
    outline: none;
  }

  body {
    color: ${({ theme }) => theme.colors.GREEN};
    background: ${({ theme }) => theme.colors.WHITE};
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: 900;
    font-style: italic;
    font-family: ${({ theme }) =>
      `${theme.font.family.primary}, ${theme.font.family.backup}, sans-serif`};
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  a {
    text-decoration: none;
    cursor: pointer
  }

  button {
    background: inherit;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  li, ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  p, h1, h2, h3, h4, h5, h6, a {
    margin: 0;
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.6rem;
    padding-bottom: 1rem;
  }

  h4 { 
    font-size: 2.2rem;
  }

  p, a, li {
    line-height: 1.6;
    font-size: 1.4rem;
  }
`
