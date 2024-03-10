class RegisterUserPage {
    constructor() {
        this.baseUrl = 'https://reqres.in/api';
        this.endpoint = '/register';
      }
    
      registerUser(email, password) {
        return cy.request('POST', this.baseUrl + this.endpoint, { email, password });
      }
    
      validateRegistration(response) {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
        expect(response.body).to.have.property('id');
      }
  }

  module.exports = new RegisterUserPage();