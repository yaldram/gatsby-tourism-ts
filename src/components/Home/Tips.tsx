import React from "react"
import { Title } from "../Title"

import { tips } from "../../constants/tips"

import styles from "./tips.module.css"

export function Tips() {
  return (
    <section className={styles.tips}>
      <Title title="hot" subtitle="tips" />
      <div className={styles.center}>
        {tips.map((item, index) => (
          <article key={index} className={styles.tip}>
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        )
        )}
      </div>
    </section>
  )
}