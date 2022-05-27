const express = require("express");
const { loginController, SignupController, allUser } = require("../Controllers/index")



const router = express.Router();

// Auth Routes
router.post("/api/signup", SignupController);
router.get("/api/alluser" , allUser)
router.post("/api/login", loginController);




module.exports = router;