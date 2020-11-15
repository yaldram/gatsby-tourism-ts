import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import { Title } from "../Title"
import { Place } from "../Places/Place"

import styles from "../items.module.css"

const getFeaturedPlaces = graphql`
  query {
    featuredPlaces: allContentfulGatsbyTourism(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          contentful_id
          name
          slug
          timeRequired
          timings
          entryFees
          featured
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

type FeaturedPlaces = {
  featuredPlaces: {
    edges: Array<{
      node: {
        contentful_id: string;
        name: string;
        slug: string;
        timeRequired: string;
        timings: string;
        entryFees: string;
        images: Array<{
          fluid: FluidObject[] | FluidObject
        }>
      }
    }>
  }
}

export function FeaturedPlaces() {
  const { featuredPlaces: { edges: places } } = useStaticQuery<FeaturedPlaces>(getFeaturedPlaces)

  return (
    <section className={styles.places}>
      <Title title="featured" subtitle="places" />
      <div className={styles.center}>
        {places.map(({ node }) => (
          <Place key={node.contentful_id} place={node} />
        ))}
      </div>
      <AniLink fade to="/places" className="btn-primary">
        all places
      </AniLink>
    </section>
  )
}