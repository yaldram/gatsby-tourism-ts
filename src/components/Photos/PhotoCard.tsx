import React from "react"
import Image, { FluidObject } from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./photos.module.css"

interface IPhotoCard {
  photo: {
    name: string;
    slug: string;
    images: Array<{
      fluid: FluidObject[] | FluidObject
    }>
  }
}

export const PhotoCard = ({ photo }: IPhotoCard) => {
  const { name, slug, images } = photo
  let mainImage = images[0].fluid

  return (
    <article className={styles.place}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single photo" />
        <AniLink fade className={styles.link} to={`/photos/${slug}`}>
          open
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>
    </article>
  )
}