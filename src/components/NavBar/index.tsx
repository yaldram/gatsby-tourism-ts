import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"

import { links } from "../../constants/links"
import { socialIcons } from "../../constants/social-icons"

import styles from "./navbar.module.css"
import logo from "../../images/logo.png"

export const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navHeader}>
          <img src={logo} className={styles.brandLogo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={() => setIsNavOpen(isOpen => !isOpen)}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>

        <ul className={isNavOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink paintDrip hex="#AEECEE" to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>

        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>

      </div>
    </nav>
  )
}