import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MixesContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

const Mix = styled.div`
  display: block;
  margin: 3rem 0;
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
            id="leatherJackets"
            title="a mix by DJ Dom and Letty"
            width="500"
            height="500"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2Fdjdomnletty%2Fdj-dom-letty-wheres-your-leather-jacket%2F"
            frameborder="0"
          />
        </Mix>
        <Mix>
          <iframe
            id="futures"
            title="a mix by DJ Dom and Letty"
            width="500"
            height="500"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2Fdjdomnletty%2Fdj-dom-letty-were-staring-at-our-futures%2F"
            frameborder="0"
          />
        </Mix>
        <Mix>
          <iframe
            id="bucketHats"
            title="a mix by DJ Dom and Letty"
            width="500"
            height="500"
            src="https://www.mixcloud.com/widget/iframe/?feed=%2Fdjdomnletty%2Fdj-dom-letty-bucket-hats-lakes-stuff%2F"
            frameborder="0"
          />
        </Mix>
      </MixesContainer>
    </>
  </Layout>
)

export default IndexPage
