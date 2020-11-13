import React from "react"
import Image, { FluidObject } from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./places.module.css"

interface IPlaceProps {
  place: {
    name: string;
    slug: string;
    images: Array<{
      fluid: FluidObject[] | FluidObject
    }>
  }
}

export function Place({ place }: IPlaceProps) {
  const { name, slug, images } = place
  const [mainImage] = images

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