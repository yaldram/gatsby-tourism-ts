import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import styles from "./single-blog.module.css"

const Blog = ({ data }) => {
  const {
    title,
    published,
    description: { childMarkdownRemark },
  } = data.post

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Published at : {published}</h4>
          <div dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }} />
          <AniLink fade to="/blog" className="btn-primary">
            All Blogs
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`