# GnsHowserAppSeed

This project was generated with the Howser CLI

Upon creation, this app is set up as a branch of the project: ``https://git.internal.gracenote.com/sports/gns-howser-\ng-\seed``

# Getting Started

## Local Development server

Run `npm install` to install the application dependencies

Run `npm start` to run the app locally. Use environment vairable `NODE_ENV` for different environments

## Long Term

If your app will be deployed to a production environment you should convert your project to be a fork of the seed repository

- create a new repository ``https://git.internal.gracenote.com/sports/gns-howser-ng-seed``

- ``git remote set-url origin https://git.internal.gracenote.com/sports/gns-howser-ng-seed``

- ``git remote add upstream https://git.internal.gracenote.com/sports/gns-howser-\ng-\seed``

Now you have a forked repository. 

To sync the project with the seed project (to get seed updates), run the following

``git fetch upstream``

``git merge upstream/master``

Add the app name to the Jenkins configuration for the job above to enable builds on the dev server

## Deploying your app for the first time

See https://wiki.gracenote.gracenote.com/display/ENG/About+Howser

# Development

## Code scaffolding (Angular app in src/web)

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

For more informatio, see the official Angular docs https://angular.io/cli

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use `NODE_ENV=prod` environment variable for production builds.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get more help on the Howser CLI, run `howser`

## API Proxy
There are cases where you may want to use some API in a Howser app, but you do not want to make those calls
client side. You may have an API key you want to keep secret, or the API may not be secure enough
to directly expose to the client.

The `@howser/api` library has a GenericApi class that you can extend to create a proxy. API calls made from the Angular 
frontend will be routed through the ExpressJS backend. API calls will be protected by the same Authentication mechanism
in place for the app itself (Nielsen Okta in most cases).

Example:

**Backend**
- [API Proxy](https://git.internal.gracenote.com/sports/gns-howser-image-curation/tree/master/src/api/gsd)
- [Plugging in the router](https://git.internal.gracenote.com/sports/gns-howser-image-curation/blob/master/src/api/index.ts#L14)

**Frontend**
- [Make a call to the backend proxy](https://git.internal.gracenote.com/sports/gns-howser-image-curation/blob/master/src/web/app/services/gsd-data.service.ts#L29)