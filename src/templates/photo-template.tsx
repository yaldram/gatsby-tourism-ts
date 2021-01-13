import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import styles from "./single-blog.module.css"

interface IPhotoTemplateProps {
  data: GatsbyTypes.getPhotoQuery
}

export default function ({ data: { photo } }: IPhotoTemplateProps) {

  if (!photo) {
    throw new Error("Photo Not Found for Photo Template")
  }

  const { name, description, images } = photo

  if (!images) {
    throw new Error("Image Not Found for Photo Template")
  }

  const [mainImage] = images

  if (!mainImage?.fluid) {
    throw new Error("Image Not Found for Photo Template")
  }

  return (
    <Layout>
      <section className={styles.blog}>
        <h1 className={styles.center}>{name}</h1>
        <div className={styles.center}>
          <Image fluid={mainImage.fluid} alt="single image" />
          <h4>{description?.description}</h4>
          <AniLink fade to="/photos" className="btn-primary">
            all photos
          </AniLink>
        </div>
      </section>
    </Layout>
  )

}

export const query = graphql`
  query getPhoto($slug: String!) {
    photo: contentfulPhotos(slug: { eq: $slug }) {
      name
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

`;