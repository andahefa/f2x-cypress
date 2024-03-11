class DeleteUserPage {
    constructor() {
        this.endpoint = '/users/2';
      }
    
      deleteUser() {
        return cy.request('DELETE', this.endpoint);
      }
    
      validateDelete(response) {
        expect(response.status).to.eq(204);
      }
  }

  module.exports = new DeleteUserPage();