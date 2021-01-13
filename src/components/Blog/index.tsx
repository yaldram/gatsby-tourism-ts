import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { BlogCard } from "./BlogCard"
import { Title } from "../Title"

import styles from "./blog.module.css"

const getPosts = graphql`
  query allPosts {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          title
          slug
          published(formatString: "MMMM Do, YYYY")
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
export const BlogList = () => {
  const { posts } = useStaticQuery<GatsbyTypes.allPostsQuery>(getPosts)

  return (
    <section className={styles.blog}>
      <Title title="hampi" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}
