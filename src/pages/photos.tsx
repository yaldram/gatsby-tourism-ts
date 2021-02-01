import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout";
import { StyledHeroComponent } from "../components/Headers";
import { PhotoList } from "../components/Photos";
import { SEO } from "../components/SEO"

export const query = graphql`
  query photosImage {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function ({ data: { defaultBcg } }: { data: GatsbyTypes.photosImageQuery }) {

  if (!defaultBcg?.childImageSharp?.fluid) {
    throw new Error("Image not found under pages/photos.tsx")
  }

  return (
    <Layout>
      <SEO title="Photos" description="Royalty free image of Hampi, the city of ruins, is a UNESCO World Heritage Site." />
      <StyledHeroComponent img={defaultBcg.childImageSharp.fluid} />
      <PhotoList />
    </Layout>
  )
}