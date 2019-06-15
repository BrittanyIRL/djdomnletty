import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.ORANGE};
  width: 100vw;
  height: 100vh;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledLink = styled(Link)`
  max-width: 60rem;
  margin-top: 2rem;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  color: ${({ theme }) => theme.colors.GREEN};
  font-weight: 600;
  padding: 1rem;
  &:hover {
    font-style: italic;
  }

  animation-name: colorPulse;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes colorPulse {
    0% {
      font-weight: 600;
      background-color: ${({ theme }) => theme.colors.YELLOW};
    }
    50% {
      font-weight: 700;

      background-color: ${({ theme }) => theme.colors.WHITE};
    }
    100% {
      font-weight: 600;
      background-color: ${({ theme }) => theme.colors.YELLOW};
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found!!" />
    <Container>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zdzY49xlvdY?start=10"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <StyledLink to="/">We're sad that you're here.</StyledLink>
    </Container>
  </Layout>
)

export default NotFoundPage
