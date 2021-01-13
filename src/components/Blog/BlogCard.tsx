import React from "react"

import styles from "./blog-card.module.css"
import { Card } from "../Card"

interface IBlogCardProps {
  readonly blog: GatsbyTypes.allPostsQuery["posts"]["edges"][number]["node"]
}


export const BlogCard = ({ blog }: IBlogCardProps) => {

  const { slug, title, image, published } = blog

  if (!image || !image.fluid) {
    return null
  }

  return (
    <Card>
      <Card.Image
        image={image.fluid}
        slug={`/blog/${slug}`}
        title="Read More"
      >
        <h6 className={styles.date}>{published}</h6>
      </Card.Image>
      <Card.Footer>
        <h4>{title}</h4>
      </Card.Footer>
    </Card>
  )
}