# Serverless Contact Form

(Video Series and Blog Post coming soon!)

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

Extend project by creating a [plugin](https://aws-amplify.github.io/docs/cli-toolchain/plugins) for the function service that adds the policy needed for a lambda to talk to SES and sends a verification email. For integrating with the AWS SDK, it looks like [this would help](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#verifyEmailIdentity-property). This is the policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "ses:SendEmail",
            "Resource": "arn:aws:ses:<region>:<accountID:identity/<verified@email.com>"
        }
    ]
}

```

Remember to properly configure the lambda [to use SES](https://github.com/mtliendo/serverless-contact-form/blob/master/amplify/backend/function/contactfunction/src/index.js).  To see all the fields, check out [the official docs](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html)
