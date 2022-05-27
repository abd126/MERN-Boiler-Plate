const loginController = require("./AuthController/login");
const allUser = require("./AuthController/allUser");
const SignupController = require("./AuthController/signup");




module.exports = {
    loginController : loginController,
    SignupController : SignupController,
    allUser : allUser,
}