import React, { useReducer } from 'react'
import API, { graphqlOperation } from '@aws-amplify/api'
import { sendEmail } from '../graphql/queries'

import styles from './contactform.module.css'

const INITIAL_STATE = {
  fullname: '',
  email: '',
  subject: '',
  body: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFormField':
      return {
        ...state,
        [action.fieldName]: action.fieldValue
      }
    default:
      return INITIAL_STATE
  }
}

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleInputChange = fieldName => event => {
    dispatch({
      type: 'updateFormField',
      fieldName,
      fieldValue: event.target.value
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    API.graphql(graphqlOperation(sendEmail, { input: state }))
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <form className={`${styles.form}`} onSubmit={handleFormSubmit}>
      <label htmlFor="fullname" className={`${styles.label}`}>
        Full Name
      </label>
      <input
        value={state.fullname}
        onChange={handleInputChange('fullname')}
        id="fullname"
        className={`${styles.input}`}
        type="text"
      />

      <label htmlFor="email" className={`${styles.label}`}>
        Email
      </label>
      <input
        value={state.email}
        onChange={handleInputChange('email')}
        className={`${styles.input}`}
        type="email"
        id="email"
      />

      <label htmlFor="subject" className={`${styles.label}`}>
        Subject
      </label>
      <input
        value={state.subject}
        onChange={handleInputChange('subject')}
        className={`${styles.input}`}
        type="text"
        id="subject"
      />

      <label htmlFor="body" className={`${styles.label}`}>
        Message
      </label>
      <textarea
        value={state.body}
        onChange={handleInputChange('body')}
        className={`${styles.input}`}
        type="text"
        id="body"
      />

      <button className={`${styles.button}`}>Submit</button>
    </form>
  )
}

export default ContactForm
