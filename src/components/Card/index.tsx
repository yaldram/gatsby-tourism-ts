import React from "react"
import Image, { FluidObject } from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./card.module.css"

interface IImageProps {
  image: FluidObject | FluidObject[],
  slug: string,
  title: string
}

interface ICardComposition {
  Image: React.FC<IImageProps>
  Footer: React.FC
}

export const Card: React.FC & ICardComposition = ({ children }) => {
  return (
    <article className={styles.card}>
      {children}
    </article>
  )
}

Card.Image = ({ children, image, slug, title }) => (
    <div className={styles.imgContainer}>
       <Image fluid={image} className={styles.img} alt="image" />
        <AniLink fade className={styles.link} to={slug}>
          {title}
        </AniLink>
      {children}
    </div>
  )


Card.Footer = ({ children }) => (
  <div className={styles.footer}>
    {children}
  </div>
)
