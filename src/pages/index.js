import React from 'react'
import Amplify from '@aws-amplify/core'
import config from '../aws-exports'
import '../global.css'
import ContactForm from '../components/ContactForm'

Amplify.configure(config)
export default () => (
  <>
    <h1>Leave a reply!</h1>
    <ContactForm />
  </>
)
