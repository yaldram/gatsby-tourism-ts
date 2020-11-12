import React from "react"
import { graphql } from "gatsby"
import { IFluidObject } from "gatsby-background-image"

import { ContactForm } from "../components/ContactForm"
import { Layout } from "../components/Layout"
import { StyledHeroComponent } from "../components/Headers"

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

interface IContactProps {
  data: {
    connectBcg: {
      childImageSharp: {
        fluid: IFluidObject | IFluidObject[] | (string | IFluidObject)[]
      }
    }
  }
}

export default function ({ data }: IContactProps) {
  return (
    <Layout>
      <StyledHeroComponent img={data.connectBcg.childImageSharp.fluid} />
      <ContactForm />
    </Layout>
  )
}