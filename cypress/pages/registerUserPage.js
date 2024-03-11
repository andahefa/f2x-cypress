class RegisterUserPage {
    constructor() {
        this.endpoint = '/register';
      }
    
      registerUser(email, password) {
        return cy.request({
          method: 'POST', 
          url: this.endpoint,
          body: { email, password },
          failOnStatusCode: false});
      }
    
      validateRegistrationSuccessfully(response) {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        expect(response.body).to.have.property('id');
      }

      validateRegistrationWithWrongEmail(response) {
        expect(response.status).to.eq(400);
      }
  }

  module.exports = new RegisterUserPage();