describe("CRUD operations with ReqRes api", () => {
  it("GET,POST,PUT & DELETE", () => {
    let userId;
    let userArrayLength = 6;

    // GET Request, get a list of all users
    cy.intercept("GET", "/users").as("getList");
    cy.api({
      method: "GET",
      url: "/users",
    }).then((response) => {
      expect(response.body.data).to.be.an("array");
      expect(response.body.data.length).to.equal(userArrayLength);
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
    });

    // POST Request, create a new user
    cy.intercept("POST", "/users").as("createUser");

    cy.api({
      method: "POST",
      url: "/users",
      body: {
        //@ts-ignore
        name: chance.name(),
        //@ts-ignore
        job: chance.profession(),
      },
    })
      .then((response) => {
        userId = response.body.id;
        expect(response.body.name).be.a("string");
        expect(response.body.job).be.a("string");
        expect(response.body.createdAt).to.exist;
        expect(response.status).to.equal(201);
        expect(response.statusText).to.equal('Created');
        return userId;
      })
      .then(() => {
        // PUT request, update user info
        cy.api({
          method: "PUT",
          url: "/users/" + userId,
          body: {
            name: "Updated",
            //@ts-ignore
            job: chance.profession(),
          },
        })
          .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
            expect(response.body.updatedAt).to.exist;
          })
          .then(() => {
            // DELETE request, delete user
            cy.api({
              method: "DELETE",
              url: "/users/" + userId,
            });
          })
          .then((response) => {
            expect(response.status).to.equal(204);
            expect(response.statusText).to.equal('No Content');
            expect(response.body).to.be.empty;
          });
      });
  });
});