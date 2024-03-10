const userPage = require("../pages/consultUserPage")
const registerUserPage = require("../pages/registerUserPage")

describe('Validation consult user', () => {
  it('validation consult user successfully', () => {
    const pageInfo = {
      pageNumber: 1,
    }
    userPage.getUsers(pageInfo.pageNumber).then((response) => {
      userPage.validatePageResponse(response);

      const data = response.body.data;
      for (const user of data) {
        userPage.validateUserProperties(user)
      }
    });

  })

})


describe('Validation register user', () => {

  it('Register user successfully', () => {
    const userData = {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    };

    registerUserPage.registerUser(userData.email, userData.password).then((response) => {
      registerUserPage.validateRegistration(response, userData.email);
    });
  });

})