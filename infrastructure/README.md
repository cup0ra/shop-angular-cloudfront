# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npm run cdk:bootstrap`  create the CDK bootstrap resources in the current AWS account/region
* `npm run cdk:synth`  synthesize the CloudFormation template
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

If deployment fails with `SSM parameter /cdk-bootstrap/hnb659fds/version not found`, the target AWS account and region have not been bootstrapped yet. Run `npm run cdk:bootstrap` first, then retry the deployment.
