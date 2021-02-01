import React from "react"
import { graphql } from "gatsby"

import { ContactForm } from "../components/ContactForm"
import { Layout } from "../components/Layout"
import { StyledHeroComponent } from "../components/Headers"
import { SEO } from "../components/SEO"

export const query = graphql`
  query contactImage {
    connectBcg: file(relativePath: { eq: "connectBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


export default function ({ data: { connectBcg } }: { data: GatsbyTypes.contactImageQuery }) {

  if (!connectBcg?.childImageSharp?.fluid) {
    throw new Error("Image not found under pages/contact.tsx")
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHeroComponent img={connectBcg.childImageSharp.fluid} />
      <ContactForm />
    </Layout>
  )
}