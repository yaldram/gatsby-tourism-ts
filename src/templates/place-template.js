import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaMoneyBillWave, FaClock, FaTypo3 } from "react-icons/fa"

import { Layout } from "../components/Layout"
import { StyledHeroComponent } from "../components/Headers"
import styles from "./template.module.css"

const Template = ({ data: { contentfulGatsbyTourism } }) => {
  const {
    name,
    slug,
    timeRequired,
    timings,
    entryFees,
    description: { description },
    images,
  } = contentfulGatsbyTourism

  const [mainImage, ...placeImages] = images

  return (
    <Layout>
      <StyledHeroComponent img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {placeImages &&
              placeImages.map((item, index) => {
                return (
                  <Img
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
            {timings ? (
              <p>
                <FaTypo3 className={styles.icon} /> Timings - {timings}
              </p>
            ) : (
                <></>
              )}
          </div>
          <p className={styles.desc}>{description}</p>
          <AniLink fade to="/places" className="btn-primary">
            back to places
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulGatsbyTourism(slug: { eq: $slug }) {
      name
      slug
      timeRequired
      timings
      entryFees
      description {
        description
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`

export default Template