import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../../components/Layout"
import { StyledHeroComponent } from "../../components/Headers"
import { BlogList } from "../../components/Blog"
import { SEO } from "../../components/SEO"

export const query = graphql`
  query blogImage {
    blogBcg: file(relativePath: { eq: "blogBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function Blog({ data: { blogBcg } }: { data: GatsbyTypes.blogImageQuery }) {

  if (!blogBcg?.childImageSharp?.fluid) {
    throw new Error("Image not found under pages/blog.tsx")
  }

  return (
    <Layout>
      <SEO title="Blog" description="Real experiences blogs on Hampi, the city of ruins, is a UNESCO World Heritage Site." />
      <StyledHeroComponent img={blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}