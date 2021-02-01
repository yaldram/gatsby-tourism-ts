import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Layout } from "../components/Layout"
import { Banner } from "../components/Banner"
import { SEO } from "../components/SEO"

export default function NotFound() {
  return (
    <Layout>
      <SEO title="Not Found" />
      <header className="error">
        <Banner title="Opps! Its A Dead End">
          <AniLink paintDrip hex="#AEECEE" to="/" className="btn-white">
            Back To Home Page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
