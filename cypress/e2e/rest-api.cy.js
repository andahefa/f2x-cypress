const userPage = require("../pages/consultUserPage")
const deleteUserPage = require("../pages/deleteUserPage")
const loginUserPage = require("../pages/loginUserPage")
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
      registerUserPage.validateRegistrationSuccessfully(response);
    });
  });

  it('user registration with wrong email', () => {
    const userData = {
      email: 'eve.holt',
      password: 'pistol',
    };

    registerUserPage.registerUser(userData.email, userData.password).then((response) => {
      registerUserPage.validateRegistrationWithWrongEmail(response);
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

describe('Login user', () => {

  it('Login user successfully', () => {
    const userData = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };

    loginUserPage.loginUser(userData.email, userData.password).then((response) => {
      loginUserPage.validateLoginSuccessfully(response);
    });
  });

  it('Login user fail', () => {
    const userData = {
      email: 'eve.holt@reqres.indd',
      password: 'cityslicka',
    };

    loginUserPage.loginUser(userData.email, userData.password).then((response) => {
      loginUserPage.validateLoginFail(response);
    });
  });

})

describe('Delete user', () => {

  it('Delete user successfully', () => {
    deleteUserPage.deleteUser().then((response) => {
      deleteUserPage.validateDelete(response);
    });
  });

})