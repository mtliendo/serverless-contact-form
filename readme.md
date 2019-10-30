# Serverless Contact Form

This is an example of how to use [AWS Amplify](https://aws-amplify.github.io/) to create a contact form. The form is contained within a component so that it may live at any depth in your application.

### TODO

- initialize project✔
  - Gatsby
- create and style the form component✔
  - CSS Modules
  - CSS Grid
- add AWS Amplify to the project✔
- create backend services✔
  - appsync api via api token
  - lambda
  - ses env for prod and dev testing
- configure custom resolver to use AWS SES✔
- update UI to handle Success, Pending, and Failure cases
- document how to get started with `amplify init --app ghURL`
  - How to add inline policy for lambda to contact SES

### Wishlist

Extend project by creating a [plugin](https://aws-amplify.github.io/docs/cli-toolchain/plugins) for the function service that adds the policy needed for a lambda to talk to SES and sends a verification email.
