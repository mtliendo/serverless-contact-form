const AWS = require('aws-sdk')
const dotenv = require('dotenv')
dotenv.config()

//! ONLY DO THIS SETUP IF MOCKING THE API
if (process.env.REGION.includes('fake')) {
  const credentials = new AWS.SharedIniFileCredentials({
    profile: process.env.AWS_PROFILE
  })
  AWS.config.credentials = credentials
}

exports.handler = function(event, context) {
  const { email, subject, body, fullname } = event.arguments.input

  // Set the region
  AWS.config.update({ region: 'us-east-1' })

  // Create sendEmail params
  const params = {
    Destination: {
      ToAddresses: ['mtliendo@gmail.com']
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `
       From: ${fullname} <${email}>
       ${body}
       `
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `${subject}`
      }
    },
    Source: 'mtliendo@gmail.com'
  }

  // Create the promise and SES service object
  const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
    .sendEmail(params)
    .promise()

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function(data) {
      console.log(data.MessageId)
      context.done(null, 'Doin me a hecka delight!')
    })
    .catch(function(err) {
      console.error(err, err.stack)
      context.done(err)
    })
}
