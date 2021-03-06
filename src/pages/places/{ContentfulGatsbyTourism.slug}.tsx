import React from "react"
import { graphql, PageProps } from "gatsby"
import { FaMoneyBillWave, FaClock, FaTypo3 } from "react-icons/fa"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Layout } from "../../components/Layout"
import { StyledHeroComponent } from "../../components/Headers"
import { SEO } from "../../components/SEO"

import styles from "./single-place.module.css"

interface IPlaceTemplateProps extends PageProps {
  data: GatsbyTypes.getPlaceQuery
}

export default function ({ location, data: { place } }: IPlaceTemplateProps) {

  if (!place) {
    throw new Error("Place not found for Place Template")
  }

  const {
    name,
    timeRequired,
    timings,
    entryFees,
    description,
    images,
  } = place

  if (!images) {
    throw new Error("No Images found for Place Template")
  }

  const [mainImage, ...placeImages] = images

  if (!mainImage?.fluid) {
    throw new Error("Image Not Found for Photo Template")
  }

  return (
    <Layout>
      <SEO title={name} pathname={location.pathname} />
      <StyledHeroComponent img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {placeImages &&
              placeImages.map((item, index) => {
                return item?.fluid && (
                  <Image
                    key={index}
                    fluid={item.fluid}
                    alt="single"
                    className={styles.image}
                  />
                )
              })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} /> Entry Fees -
              {entryFees}
            </p>
            <p>
              <FaClock className={styles.icon} />
              Time Required - {timeRequired} hours
            </p>
            {timings && (
              <p>
                <FaTypo3 className={styles.icon} /> Timings - {timings}
              </p>
            )}
          </div>
          <p className={styles.desc}>{description?.description}</p>
          <AniLink fade to="/places" className="btn-primary">
            back to places
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPlace($id: String!) {
    place: contentfulGatsbyTourism(id: { eq: $id }) {
      name
      timeRequired
      timings
      entryFees
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
`