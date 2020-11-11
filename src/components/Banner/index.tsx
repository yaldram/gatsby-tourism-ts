import React from "react"

import styles from "./banner.module.css"

interface IBannerProps {
  title: string;
  info?: string
}

export const Banner: React.FC<IBannerProps> = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}