import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IFluidObject } from "gatsby-background-image"

import { Layout } from "../components/Layout"
import { StyledHeroComponent } from "../components/Headers"
import { About } from "../components/Home/About"
import { Tips } from "../components/Home/Tips"
import { Banner } from "../components/Banner"
import { FeaturedPlaces } from "../components/Home/FeaturedPlaces"

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
interface IHomeProps {
  data: {
    defaultBcg: {
      childImageSharp: {
        fluid: IFluidObject | IFluidObject[] | (string | IFluidObject)[]
      }
    }
  }
}

export default function ({ data }: IHomeProps) {
  return (
    <Layout>
      <StyledHeroComponent home img={data.defaultBcg.childImageSharp.fluid}>
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