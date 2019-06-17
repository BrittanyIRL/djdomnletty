import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MixesContainer = styled.div`
  margin-top: 10rem;
  width: 100vw;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
  }
`

const Mix = styled.div`
  display: block;
  max-width: 90vw;
  width: 60rem;
  margin: 1rem 0;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="DJ DOM &amp; LETTY"
      keywords={[
        `phoenix`,
        `dj`,
        `vinyl`,
        `music`,
        `dj dom n letty`,
        `dom`,
        `letty`,
        `dom n letty`,
        `dom & letty`,
        `dom and letty`,
      ]}
    />
    <>
      <MixesContainer>
        <Mix>
          <iframe
            id="leatherJacket"
            title="a mix by DJ Dom and Letty"
            width="100%"
            height="200"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdjdomnletty%2Fdj-dom-letty-wheres-your-leather-jacket%2F"
            frameborder="0"
          />
        </Mix>
        <Mix>
          <iframe
            id="futures"
            title="a mix by DJ Dom and Letty"
            width="100%"
            height="200"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdjdomnletty%2Fdj-dom-letty-were-staring-at-our-futures%2F"
            frameborder="0"
          />
        </Mix>
        <Mix>
          <iframe
            id="bucketHats"
            title="a mix by DJ Dom and Letty"
            width="100%"
            height="200"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdjdomnletty%2Fdj-dom-letty-bucket-hats-lakes-stuff%2F"
            frameborder="0"
          />
        </Mix>
      </MixesContainer>
    </>
  </Layout>
)

export default IndexPage
