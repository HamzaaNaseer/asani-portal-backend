const express = require("express");
const {
  createUser,
  login,
  logout,
  getSingleUser,
  getAllUsers,
} = require("../controllers/userController");
const {
  isAuthenticated,
  authorizeRoles,
} = require("../middlewares/isAuthenticated");
const router = express.Router();

router.post("/createuser", createUser);
router.post("/login", login);
router.get("/logout", logout);
router.get(
  "/user/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  getSingleUser
);
router.get(
  "/getAllUsers",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsers
);
module.exports = router;
