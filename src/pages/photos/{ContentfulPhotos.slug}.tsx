import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import { graphql, PageProps } from "gatsby"

import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"

import styles from "./single-photo.module.css"

interface IPhotoTemplateProps extends PageProps {
  data: GatsbyTypes.getPhotoQuery
}

export default function ({ location, data: { photo } }: IPhotoTemplateProps) {

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
      <SEO title={name} description={`Royalty free image of ${name}`} pathname={location.pathname} />
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
  query getPhoto($id: String!) {
    photo: contentfulPhotos(id: { eq: $id }) {
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