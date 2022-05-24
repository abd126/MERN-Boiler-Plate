const express = require("express");
const { Login_Controller, SignupController } = require("../Controllers/index")



const router = express.Router();

// Auth Routes
router.post("/api/signup", SignupController);
// router.post("/api/login", Login_Controller);




module.exports = router;