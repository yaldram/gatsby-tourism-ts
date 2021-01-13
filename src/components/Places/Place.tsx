import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./places.module.css"

interface IPlaceProps {
  readonly place: GatsbyTypes.allPlacesQuery["places"]["edges"][number]["node"]
}


export function Place({ place }: IPlaceProps) {
  const { name, slug, images } = place

  if (!images) {
    return null;
  }

  const [mainImage] = images

  if (!mainImage || !mainImage?.fluid) {
    return null;
  }

  return (
    <article className={styles.place}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage.fluid}
          className={styles.img}
          alt="single place"
        />
        <AniLink fade className={styles.link} to={`/places/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>
    </article>
  )
}