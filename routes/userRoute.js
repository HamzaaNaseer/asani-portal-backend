const express = require("express");
const { createUser, login,logout } = require("../controllers/userController");
const router = express.Router();

router.post("/createuser", createUser);
router.post("/login", login);
router.get("/logout", logout);
module.exports = router;
