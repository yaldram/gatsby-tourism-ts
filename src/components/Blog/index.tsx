import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import { BlogCard } from "./BlogCard"
import { Title } from "../Title"

import styles from "./blog.module.css"

type Blog = {
  posts: {
    edges: Array<{
      node: {
        id: string;
        slug: string;
        title: string;
        image: { fluid: FluidObject };
        published: string
      }
    }>
  }
}

const getPosts = graphql`
  query {
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
  const { posts } = useStaticQuery<Blog>(getPosts)

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
