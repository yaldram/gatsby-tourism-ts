import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./photos.module.css"

interface IPhotoCard {
  readonly photo: GatsbyTypes.allPhotosQuery["photos"]["edges"][number]["node"]
}

export const PhotoCard = ({ photo }: IPhotoCard) => {
  const { name, slug, images } = photo

  if (!images) {
    return null;
  }

  const [mainImage] = images;

  if (!mainImage || !mainImage?.fluid) {
    return null;
  }

  return (
    <article className={styles.place}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage.fluid} className={styles.img} alt="single photo" />
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