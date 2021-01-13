import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { Title } from "../Title"

import styles from "./about.module.css"

const getAboutImgQuery = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export function About() {
  const { aboutImage } = useStaticQuery<GatsbyTypes.aboutImageQuery>(getAboutImgQuery)

  if (!aboutImage?.childImageSharp?.fluid) {
    throw new Error("Image not found under components/Home/About.tsx")
  }

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="hampi" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Image fluid={aboutImage.childImageSharp.fluid} alt="landscape" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>The abode of bygone ruins</h4>
          <p>
            Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated
            in the shadowed depth of hills and valleys in the state of
            Karnataka, this place is a historical delight for travellers.
          </p>
          <p>
            Surrounded by 500 ancient monuments, beautiful temples, bustling
            street markets, bastions, treasury building and captivating remains
            of Vijayanagar Empire, Hampi is a backpacker's delight.
          </p>
          <a
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://en.wikipedia.org/wiki/Hampi"
          >
            read more
          </a>
        </article>
      </div>
    </section>
  )
}