class LoginUserPage {
    constructor() {
        this.endpoint = '/login';
      }
    
      loginUser(email, password) {
        return cy.request({
          method: 'POST', 
          url: this.endpoint,
          body: { email, password },
          failOnStatusCode: false});
      }
    
      validateLoginSuccessfully(response) {
        cy.log(response.body.token)
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      }

      validateLoginFail(response) {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.eq('user not found');
      }

  }

  module.exports = new LoginUserPage();