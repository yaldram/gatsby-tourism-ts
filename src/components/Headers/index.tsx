import React from "react"
import BackgroundImage, { IFluidObject } from "gatsby-background-image"

import styles from "./header.module.css"

interface IStyledHeroComponentProps {
  img: IFluidObject | IFluidObject[] | (string | IFluidObject)[]
  home?: boolean
}

export const StyledHeroComponent: React.FC<IStyledHeroComponentProps> = ({ img, home = false, children }) => {
  return (
    <BackgroundImage
      className={home ? styles.styledHeader : styles.baseStyled}
      fluid={img}>
      {children}
    </BackgroundImage>

  )
}