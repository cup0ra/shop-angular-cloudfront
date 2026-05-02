# Shop Angular Cloudfront

Angular version: ~17.

Repo maintainers:

- [Sergey Gultyayev](https://github.com/gultyayev)

## The purpose

The repository was created to have an Angular version of e-shop for EPAM NodeJS AWS course. At the same time we strive to make this repository follows best practices so it may be used as a starter for new projects with all the necessary toolings already set up.

## NodeJS AWS course integration

All the necessary API endpoints are in the environments files `environment.ts` (for dev builds). Also it contains feature flags to enable/disable endpoints invocations from within the app so to ensure that you don't get errors for not implemented API endpoints.

## Contribution

Create an issue with the detailed description of the improvement/issue.

If you would like to help implementing some feature, you should ask the maintainers for approval so to ensure that the feature is desired in the repository and no efforts go wasted.

## Get up and running

Prerequisites: NodeJS LTS v18.x and higher

Follow the steps:

- git clone
- npm i
- ng serve

## CDK deployment

Current deployed app URL:

- https://dzpenjz7rcmzz.cloudfront.net/

The deployment stack targets the AWS account and region configured in your current AWS CLI session.

Before the first deployment in a given AWS account and region, bootstrap the CDK environment:

- `npm run cdk:bootstrap`

Then deploy the app and infrastructure:

- `npm run cdk:deploy`

If you need a specific account, region, or profile, set those in your AWS CLI environment before running the commands. For example:

- `AWS_PROFILE=my-profile CDK_DEFAULT_REGION=us-east-1 npm run cdk:bootstrap`
- `AWS_PROFILE=my-profile CDK_DEFAULT_REGION=us-east-1 npm run cdk:deploy`

If CDK prints a warning that it could not assume the bootstrap deploy role but the credentials are for the correct account, it will continue with your current credentials. That warning is not the blocking error. The blocking error is the missing bootstrap resources.

## Troubleshooting

### Cannot commit

Most likely you are getting a message

> **Commit failed with error**
>
> ...
>
> ✖ subject may not be empty [subject-empty]
>
> ✖ type may not be empty [type-empty]
>
> ✖ found 2 problems, 0 warnings
>
> ⓘ Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
>
> husky - commit-msg script failed (code 1)

To fix it you either need to follow conventional commit messages rules, or remove `.husky/pre-commit` file which enables the aforementioned rule.
