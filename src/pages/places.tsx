import React from "react"
import { graphql } from "gatsby"
import { IFluidObject } from "gatsby-background-image"

import { Places } from "../components/Places"
import { Layout } from "../components/Layout"
import { StyledHeroComponent } from "../components/Headers"

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

interface IPlacesProps {
  data: {
    defaultBcg: {
      childImageSharp: {
        fluid: IFluidObject | IFluidObject[] | (string | IFluidObject)[]
      }
    }
  }
}

export default function PlacesPage({ data }: IPlacesProps) {
  return (
    <Layout>
      <StyledHeroComponent img={data.defaultBcg.childImageSharp.fluid} />
      <Places />
    </Layout>
  )
}