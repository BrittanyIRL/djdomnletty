import React from "react"

import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO
      title="DJ DOM &amp; LETTY"
      keywords={[`phoenix`, `dj`, `vinyl`, `music`]}
    />
    <body>
      <Container />
    </body>
  </Layout>
)

export default IndexPage
