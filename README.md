## Cypress ReqRes API Tests [![cross browser API testing](https://github.com/Ederfdz/cypress-reqres-api-tests/actions/workflows/api-tests.yml/badge.svg)](https://github.com/Ederfdz/cypress-reqres-api-tests/actions/workflows/api-tests.yml)


This project is a Cypress test suite written in TypeScript to test CRUD operations (Create, Read, Update, Delete) using the ReqRes API (https://reqres.in/).

Features:

- TypeScript for type safety and better code organization.
- [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api) for enhanced API call visualization in the Cypress UI.
- "cypress/browsers" Docker image to create an image pre-loaded with Node and all the browsers I wanted to run my tests on.
- Docker Compose to create separate containers for Chrome, Firefox, and Edge.
- GitHub Actions workflow that runs my tests daily, on pull request actions (open/close), and on pushes to the main branch.

Requirements:

[Node.js](https://nodejs.org/en/download)

#### Clone the repository to your local machine:
```
git clone https://github.com/Ederfdz/cypress-restful-api-tests
```

#### Cd into the project directory:
```
cd Cypress\ API\ tests/ 
```

#### Download project dependencies:

```
npm install
```




#### Running Tests:
```
npx cypress run
```
