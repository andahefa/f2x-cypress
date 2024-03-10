const userPage = require("../pages/consultUserPage")
const registerUserPage = require("../pages/registerUserPage")
const updateUserPage = require("../pages/updateUserPage")

describe('Consult user', () => {
  it('Consult user successfully', () => {
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


describe('Register user', () => {

  it('Register user successfully', () => {
    const userData = {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    };

    registerUserPage.registerUser(userData.email, userData.password).then((response) => {
      registerUserPage.validateRegistration(response);
    });
  });

})

describe('Update user', () => {

  it('Update user successfully', () => {
    const userData = {
      name: 'morpheus',
      job: 'zion resident',
    };

    updateUserPage.updateUser(userData.name, userData.job).then((response) => {
      updateUserPage.validateUpdate(response);
    });
  });

})