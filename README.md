# Homelike

This is a project done for Homelike interview. 

You can find the kanban board of this project [here](https://github.com/basilisSam/Homelike/projects/2).

## Teck Stack

The project is build with [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/). It uses [jest](https://jestjs.io/) and [testing-library](https://testing-library.com/) for testing. It also uses [Tailwind CSS](https://tailwindcss.com/) for styling.

For continuous integration and continuous deployment it uses [Netlify CI/CD](https://www.netlify.com/). The project has been deployed here: https://vasilis-aircall.netlify.app/

The project is also using [Snyk](https://snyk.io/) for security vulnerabilities, and [Codacy](https://www.codacy.com/) for code static analysis.

### Run it locally

1. Clone the project on your local machine. <br/>
   `$ git clone https://github.com/basilisSam/Homelike.git`

1. Navigate to the project folder and install the dependencies with the following command. <br/>
   `$ npm install`

1. Run the application locally (the application can be accessed from [localhost:3000](http://localhost:3000/)) <br/>
   `$ npm run start`

1. Login by inserting a text to both username & password fields (as long as you enter something login will be successful) <br/>

### Available scripts

#### Run app locally
You can run the application locally by using `npm run start`.

#### Test
You can run the tests of the application with `npm run test`

#### Test with watch
You can run the tests of the application and enable watching for any updates with `npm run test:watch`

#### Test with coverage

You can run the tests of the application and generate a coverage report with `npm run test:coverage`

The report can be found in the `/coverage/` folder.

#### Lint

You can lint the project with `npm run lint`

#### Lint with fix

You can lint the project and attempt to fix issues with `npm run lint-fix`

#### Build

You can build the application in production mode with `npm run build`

#### Build production

You can build the application in production mode, run tests and lint the project with `npm run build:prod`

> **Note:** You can use `yarn` instead of `npm`

### CI/CD
The following steps are running when a commit is made to `main` branch:
1. Triggers a build pipeline
1. Lint code
1. Run tests
1. Build project 
