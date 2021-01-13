import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"

import { Title } from "../Title"
import { Place } from "../Places/Place"

import styles from "../items.module.css"

const getFeaturedPlaces = graphql`
  query featuredPlaces {
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


export function FeaturedPlaces() {
  const { featuredPlaces: { edges: places } } = useStaticQuery<GatsbyTypes.featuredPlacesQuery>(getFeaturedPlaces)

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