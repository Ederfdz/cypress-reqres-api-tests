## Cypress ReqRes API Tests [![cross browser API testing](https://github.com/Ederfdz/cypress-reqres-api-tests/actions/workflows/api-tests.yml/badge.svg)](https://github.com/Ederfdz/cypress-reqres-api-tests/actions/workflows/api-tests.yml)


This project is a Cypress test suite written in TypeScript to test CRUD operations (Create, Read, Update, Delete) using the ReqRes API (https://reqres.in/).

Features:

Uses TypeScript for type safety and better code organization.
Leverages [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api) for enhanced API call visualization in the Cypress UI.

Tests CRUD operations on users:
Create a new user.
Read list of users and verify their existence.
Update a user's details.
Delete a user.

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
npx cypress open
```

Select restful-api.cy.ts spec file inside test runner.
