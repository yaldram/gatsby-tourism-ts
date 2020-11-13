import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "../items.module.css"
import { Title } from "../Title"
import { Place } from "./Place"
import { FluidObject } from "gatsby-image"

const getPlaces = graphql`
  query {
    places: allContentfulGatsbyTourism {
      edges {
        node {
          name
          timeRequired
          slug
          timings
          contentful_id
          entryFees
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

type Places = {
  places: {
    edges: Array<{
      node: {
        name: string;
        timeRequired: string;
        slug: string;
        timings: string;
        contentful_id: string;
        entryFees: string;
        images: Array<{
          fluid: FluidObject[] | FluidObject
        }>

      }
    }>
  }
}

export function Places() {
  const { places } = useStaticQuery<Places>(getPlaces)

  if (!places) return null;

  return (
    <section className={styles.tours}>
      <Title title="Places" subtitle="places" />
      <div className={styles.center}>
        {places.edges.map(({ node }) => {
          return <Place key={node.contentful_id} place={node} />
        })}
      </div>
    </section>
  )
}