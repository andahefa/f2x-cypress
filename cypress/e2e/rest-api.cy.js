const { DATALOGINUSERSUCCESSFULLY, DATALOGINUSERFAIL } = require("../../Utils/dataConstants/loginUserConstants")
const { DATAREGISTERUSERSUCCESSFULLY, DATAREGISTERUSERFAIL } = require("../../Utils/dataConstants/registerUserConstants")
const { DATAUPDATEUSERSUCCESSFULLY } = require("../../Utils/dataConstants/updateUserConstants")
const { DATACONSULTUSERSUCCESSFULLY } = require("../../utils/dataConstants/consultUserConstants")
const userPage = require("../pages/consultUserPage")
const deleteUserPage = require("../pages/deleteUserPage")
const loginUserPage = require("../pages/loginUserPage")
const registerUserPage = require("../pages/registerUserPage")
const updateUserPage = require("../pages/updateUserPage")

describe('Consult user', () => {
  it('Consult user successfully', () => {
    userPage.getUsers(DATACONSULTUSERSUCCESSFULLY.pageNumber).then((response) => {
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
    registerUserPage.registerUser(DATAREGISTERUSERSUCCESSFULLY.email, DATAREGISTERUSERSUCCESSFULLY.password).then((response) => {
      registerUserPage.validateRegistrationSuccessfully(response);
    });
  });

  it('user registration with wrong email', () => {
    registerUserPage.registerUser(DATAREGISTERUSERFAIL.email, DATAREGISTERUSERFAIL.password).then((response) => {
      registerUserPage.validateRegistrationWithWrongEmail(response);
    });
  });
})


describe('Update user', () => {
  it('Update user successfully', () => {
    updateUserPage.updateUser(DATAUPDATEUSERSUCCESSFULLY.name, DATAUPDATEUSERSUCCESSFULLY.job).then((response) => {
      updateUserPage.validateUpdate(response);
    });
  });
})


describe('Login user', () => {
  it('Login user successfully', () => {
    loginUserPage.loginUser(DATALOGINUSERSUCCESSFULLY.email, DATALOGINUSERSUCCESSFULLY.password).then((response) => {
      loginUserPage.validateLoginSuccessfully(response);
    });
  });

  it('Login user fail', () => {
    loginUserPage.loginUser(DATALOGINUSERFAIL.email, DATALOGINUSERFAIL.password).then((response) => {
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