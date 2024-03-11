class UpdateUserPage {
    constructor() {
        this.endpoint = '/users/2';
      }
    
      updateUser(name, job) {
        return cy.request('PUT', this.endpoint, { name, job });
      }
    
      validateUpdate(response) {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('job');
        expect(response.body).to.have.property('updatedAt');
      }
  }

  module.exports = new UpdateUserPage();