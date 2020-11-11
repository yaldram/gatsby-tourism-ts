import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { links } from "../../constants/links"
import { socialIcons } from "../../constants/social-icons"

import styles from "./footer.module.css"


export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map(({ path, text }, index) => (
          <AniLink paintDrip hex="#AEECEE" key={index} to={path}>
            {text}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map(({ url, icon }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Amazing Hampi {new Date().getFullYear()} all rights
        reserved
      </div>
    </footer>
  )
}