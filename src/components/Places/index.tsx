import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styles from "../items.module.css"
import { Title } from "../Title"
import { Place } from "./Place"

const getPlaces = graphql`
  query allPlaces {
    places: allContentfulGatsbyTourism {
      edges {
        node {
          contentful_id
          name
          slug
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


export function Places() {
  const { places } = useStaticQuery<GatsbyTypes.allPlacesQuery>(getPlaces)

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