import React, { FormEvent } from "react"
import { Title } from "../Title"

import styles from "./contact-form.module.css"

export const ContactForm: React.FC = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.center}>
        <Title title="contact" subtitle="us" />
        <form onSubmit={(event: FormEvent) => event.preventDefault()} method="POST" className={styles.form}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john doe"
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="[email@email.com]"
            />
          </div>

          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              rows={10}
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>

          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}