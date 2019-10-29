import React from 'react'
import styles from './contactform.module.css'

const ContactForm = () => {
  return (
    <form className={`${styles.form}`}>
      <label htmlFor="fullname" className={`${styles.label}`}>
        Full Name
      </label>
      <input id="fullname" className={`${styles.input}`} type="text" />

      <label htmlFor="email" className={`${styles.label}`}>
        Email
      </label>
      <input className={`${styles.input}`} type="email" id="email" />

      <label htmlFor="subject" className={`${styles.label}`}>
        Subject
      </label>
      <input className={`${styles.input}`} type="text" id="subject" />

      <label htmlFor="body" className={`${styles.label}`}>
        Message
      </label>
      <textarea className={`${styles.input}`} type="text" id="body" />

      <button className={`${styles.button}`} type="reset">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
