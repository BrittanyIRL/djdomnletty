import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  min-width: 100vw !important;
  width: 100% !important;
  height: 10rem;
  display: flex;
  align-items: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.BLUE};
  @media (max-width: 600px) {
    height: 5rem;
  }
`

const Heading = styled.h1`
  width: 100vw;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: 9rem;
  letter-spacing: 0.45rem;
  color: ${({ theme }) => theme.colors.ORANGE};
  text-align: right;
  translate(-100%, 0);
  animation: marquee 10s linear 1s infinite alternate;
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
      color: ${({ theme }) => theme.colors.ORANGE};
    }
    50% {
      color: ${({ theme }) => theme.colors.GREEN};
    }
    100% {
      transform: translate(-100%, 0);
      color: ${({ theme }) => theme.colors.YELLOW};

    }
  }

  @media (max-width: 600px) {
    font-size: 3.5rem;  
  }
`
const Header = () => (
  <HeaderContainer>
    <Heading>DJ DOM &amp; LETTY</Heading>
  </HeaderContainer>
)

export default Header
