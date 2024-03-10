
describe('Validation API', () => {
  const baseUrl = 'https://reqres.in/api'
  const endpoint = '/users'
  it('Consult and validation information users', () => {
    const param = '?page=1'
    cy.request('GET', baseUrl + endpoint + param).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('page')
      expect(response.body).to.have.property('data')

      const data = response.body.data;
      for (const user of data) {
        const id = JSON.stringify(user.id)
        const email = JSON.stringify(user.email)
        const firstName = JSON.stringify(user.first_name)
        const lastName = JSON.stringify(user.last_name)
        const avatar = JSON.stringify(user.avatar)

        expect(id).to.not.be.null
        expect(email).to.not.be.null
        expect(firstName).to.not.be.null
        expect(lastName).to.not.be.null
        expect(avatar).to.not.be.null
      }
    });
  })
})