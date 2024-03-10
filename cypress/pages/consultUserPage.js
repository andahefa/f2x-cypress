class UsersPage {
    constructor() {
      this.baseUrl = 'https://reqres.in/api'
      this.endpoint = '/users'
    }
  
    getUsers(pageNumber = 1) {
      const param = `?page=${pageNumber}`
      return cy.request('GET', this.baseUrl + this.endpoint + param)
    }
  
    validatePageResponse(response) {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('page')
      expect(response.body).to.have.property('data')
    }
  
    validateUserProperties(user) {
      const id = JSON.stringify(user.id)
      const email = JSON.stringify(user.email)
      const firstName = JSON.stringify(user.first_name)
      const lastName = JSON.stringify(user.last_name)
      const avatar = JSON.stringify(user.avatar)
  
      this.validateProperty(id, 'ID')
      this.validateProperty(email, 'Email')
      this.validateProperty(firstName, 'First Name')
      this.validateProperty(lastName, 'Last Name')
      this.validateProperty(avatar, 'Avatar')
    }
  
    validateProperty(property, propertyName) {
      cy.wrap(property).should('not.be.null', `${propertyName} should not be null`);
    }
  }
  
  module.exports = new UsersPage();
  