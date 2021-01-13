import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Layout } from "../components/Layout"
import { StyledHeroComponent } from "../components/Headers"
import { About } from "../components/Home/About"
import { Tips } from "../components/Home/Tips"
import { Banner } from "../components/Banner"
import { FeaturedPlaces } from "../components/Home/FeaturedPlaces"

export const query = graphql`
  query homeImage {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function ({ data: { defaultBcg } }: { data: GatsbyTypes.homeImageQuery }) {

  if (!defaultBcg?.childImageSharp?.fluid) {
    throw new Error("Image not found under pages/index.tsx")
  }

  return (
    <Layout>
      <StyledHeroComponent home img={defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Awesome Hampi"
          info="Come and explore, the city of ruins, which is a UNESCO World Heritage Site."
        >
          <AniLink paintDrip hex="#AEECEE" to="/places" className="btn-white">
            Explore Places
        </AniLink>
        </Banner>
      </StyledHeroComponent>
      <About />
      <Tips />
      <FeaturedPlaces />
    </Layout>

  )
}