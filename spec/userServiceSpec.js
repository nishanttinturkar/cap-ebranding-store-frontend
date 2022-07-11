//const { default: Loan } = require('../src/model/Loan');

describe("Testing  User Service", function () {
  var userService = require("../src/service/UserService");

  var user = require("../src/model/User");

  // var emp=require('../src/model/Employee');

  beforeEach(function () {
    usrService = new userService.UserService();
  });

  it("User By ID", function () {
    usrService.getUserById(201).then((result) => {
      let user = result.data;

      expect(user.firstName).toBe("nishant");
    });
  });

  it("Adding the User", function () {
    //let loanId=1199

    user.firstName = "abc";
    user.lastName = "xyz";
    user.gender = "male";
    user.phone = "8765876543";
    user.email = "abcdc@gmail.com";
    user.password = "abcxyz";
    user.modifiedAt = "";
    user.createdAt = "";

    usrService.addUser(user).then((result) => {
      let user = result.data;

      expect(user.gender).toBe("male");
    });
  });

  //   it("get all user ", function () {
  //     usrService.getAllUsers().then((result) => {
  //       let user = result.data;

  //       expect(user.modifiedAt).toBe();
  //     });
  //   });

  it("Updating the User", function () {
    //let loanId=1172

    user.firstName = "abcc";
    user.lastName = "xyz";
    user.gender = "male";
    user.phone = "8765876543";
    user.email = "acbdc@gmail.com";
    user.password = "abcxyz";
    user.modifiedAt = "";
    user.createdAt = "";

    usrService.updateUser(user).then((result) => {
      service.getUserById(212).then((result) => {
        let user = result.data;

        expect(user.firstName).toBe("abcc");
      });
    });
  });

  //   it("Delete User By ID", function () {
  //     let id = 158;

  //     usrService.deleteUserById(id).then(() => {
  //       service.getUserById(id).then((result) => {
  //         let user = result.data;

  //         expect(null).toBe(null);
  //       });
  //     });
  //   });
});
