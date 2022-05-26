const express = require("express");
const { Login_Controller, SignupController, allUser } = require("../Controllers/index")



const router = express.Router();

// Auth Routes
router.post("/api/signup", SignupController);
router.get("/api/alluser" , allUser)
// router.post("/api/login", Login_Controller);




module.exports = router;