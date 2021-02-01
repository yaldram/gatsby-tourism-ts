import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, PageProps } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import styles from "./single-blog.module.css"

interface IBlogTemplateProps extends PageProps {
  data: GatsbyTypes.getPostQuery
}

export default function ({ location, data: { post } }: IBlogTemplateProps) {

  if (!post) {
    throw new Error("Post not found for Blog Template")
  }

  const { title, published, description } = post

  return (
    <Layout>
      <SEO title={title} description={description?.childMarkdownRemark?.excerpt} pathname={location.pathname} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Published at : {published}</h4>
          <div dangerouslySetInnerHTML={{ __html: description?.childMarkdownRemark?.html || "" }} />
          <AniLink fade to="/blog" className="btn-primary">
            All Blogs
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      description {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`