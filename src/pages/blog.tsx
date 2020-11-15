import React from "react"
import { graphql } from "gatsby"
import { IFluidObject } from "gatsby-background-image"

import { Layout } from "../components/Layout"
import { StyledHeroComponent } from "../components/Headers"
import { BlogList } from "../components/Blog"

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

interface IBlogProps {
  data: {
    blogBcg: {
      childImageSharp: {
        fluid: IFluidObject | IFluidObject[] | (string | IFluidObject)[]
      }
    }
  }
}

export default function Blog({ data }: IBlogProps) {
  return (
    <Layout>
      <StyledHeroComponent img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}