import React from "react"
import { graphql } from "gatsby"
import { IFluidObject } from "gatsby-background-image"

import { Layout } from "../components/Layout";
import { StyledHeroComponent } from "../components/Headers";
import { PhotoList } from "../components/Photos";

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
`;

interface IPhototsProps {
  data: {
    defaultBcg: {
      childImageSharp: {
        fluid: IFluidObject | IFluidObject[] | (string | IFluidObject)[]
      }
    }
  }
}

export default function ({ data }: IPhototsProps) {
  return (
    <Layout>
      <StyledHeroComponent img={data.defaultBcg.childImageSharp.fluid} />
      <PhotoList />
    </Layout>
  )
}