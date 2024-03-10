class RegisterUserPage {
    constructor() {
        this.baseUrl = 'https://reqres.in/api';
        this.endpoint = '/register';
      }
    
      registerUser(email, password) {
        return cy.request({
          method: 'POST', 
          url: this.baseUrl + this.endpoint,
          body: { email, password },
          failOnStatusCode: false});
      }
    
      validateRegistration(response) {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        expect(response.body).to.have.property('id');
      }
  }

  module.exports = new RegisterUserPage();