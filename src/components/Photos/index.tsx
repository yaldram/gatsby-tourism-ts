import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../Title"
import { PhotoCard } from "./PhotoCard"

import styles from "../items.module.css"

const getPhotos = graphql`
  query allPhotos {
    photos: allContentfulPhotos {
      edges {
        node {
          id: contentful_id
          name
          slug
          description {
            description
          }
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

export const PhotoList = () => {
  const { photos } = useStaticQuery<GatsbyTypes.allPhotosQuery>(getPhotos);

  return (
    <section className={styles.tours}>
      <Title title="hampi" subtitle="photos" />
      <p className={styles.subText}>
        <span>Royalty free</span> photos of Hampi
      </p>
      <div className={styles.center}>
        {photos.edges.map(({ node }) =>
          <PhotoCard key={node.id} photo={node} />
        )}
      </div>
    </section>
  )
}