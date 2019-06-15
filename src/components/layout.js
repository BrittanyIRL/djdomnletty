/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components/macro"
import { GlobalStyle, theme } from "../styles"
import Header from "./header"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  width: 100%;
  min-height: 100%;
`

const Main = styled.main``

const Footer = styled.footer`
  padding: 1rem 3rem;
  border-top: ${({ theme }) => `.5rem solid ${theme.colors.BLUE}`};
`

const today = new Date()
const GlobalLayout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Body>
              <Header />
              <Main>
                {children}
                <Footer>
                  <p>
                    DJ Dom &amp; Letty are based in Phoenix, AZ. You can reach
                    them at djdomnletty@gmail.com.
                  </p>
                  <p>
                    Site belongs to DJ Dom &amp; Letty, {today.getFullYear()}.
                    We aren't affiliated with Fast and Furious, we're just huge
                    fans. Site maintained from the surface of Mars.
                  </p>
                </Footer>
              </Main>
            </Body>
          </>
        </ThemeProvider>
      )}
    />
  )
}

export default GlobalLayout
