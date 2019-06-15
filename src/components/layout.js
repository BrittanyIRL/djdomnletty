/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components/macro"
import { GlobalStyle, theme } from "../styles"

const Body = styled.div``

const Main = styled.main``

const Footer = styled.footer``

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
              <Main>{children}</Main>

              <Footer>
                <p>
                  copyright and content belong to DJ Dom &amp; Letty,{" "}
                  {today.getFullYear()}.
                </p>
                <p>site maintained from the surface of Mars.</p>
              </Footer>
            </Body>
          </>
        </ThemeProvider>
      )}
    />
  )
}

export default GlobalLayout
