import React from "react"
import Image, { FluidObject } from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./blog-card.module.css"

interface IBlogCardProps {
  blog: {
    slug: string;
    title: string;
    image: { fluid: FluidObject };
    published: string
  }
}

export const BlogCard = ({ blog }: IBlogCardProps) => {

  const { slug, title, image, published } = blog

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single post" />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}