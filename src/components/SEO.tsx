import React from "react";
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface ISEOProps {
  title?: string;
  description?: string;
  pathname?: string;
}

const getSiteData = graphql`
 query allSitedata {
   site {
     siteMetadata {
      siteTitle: title
      siteDesc: description
      author
      siteUrl
      image
      twitterUsername
     }
   }
 }

`

export function SEO({ title, description, pathname }: ISEOProps) {
  const { site } = useStaticQuery<GatsbyTypes.allSitedataQuery>(getSiteData);

  if (!site?.siteMetadata) {
    throw new Error("Site Information not available");
  }

  const { siteTitle, siteDesc, siteUrl, image, twitterUsername } = site.siteMetadata;

  const canonical = pathname ? `${siteUrl}${pathname}` : null

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`} link={
      canonical
        ? [
          {
            rel: "canonical",
            href: canonical,
          },
        ]
        : []
    }>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  )
}