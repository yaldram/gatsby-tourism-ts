import React from "react"
import { graphql } from "gatsby"

import { Places } from "../../components/Places"
import { Layout } from "../../components/Layout"
import { StyledHeroComponent } from "../../components/Headers"
import { SEO } from "../../components/SEO"

export const query = graphql`
  query placesImage {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function PlacesPage({ data: { defaultBcg } }: { data: GatsbyTypes.placesImageQuery }) {

  if (!defaultBcg?.childImageSharp?.fluid) {
    throw new Error("Image not found under pages/places.tsx")
  }

  return (
    <Layout>
      <SEO title="Places" description="Places to visit in Hampi, the city of ruins, is a UNESCO World Heritage Site." />
      <StyledHeroComponent img={defaultBcg.childImageSharp.fluid} />
      <Places />
    </Layout>
  )
}


