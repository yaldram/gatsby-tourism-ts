import React from "react"

import styles from "./title.module.css"

interface ITitleProps {
  title: string;
  subtitle: string
}

export const Title: React.FC<ITitleProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.titleWrapper}>
      <h4 className={styles.heading}>
        <span className={styles.title}>
          {title}
        </span>
        <span className={styles.subtitle}>{subtitle}</span>
      </h4>
    </div>
  )
}