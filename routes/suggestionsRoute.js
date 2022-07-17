const express = require("express");
const {
  createSuggestion,
  getAllSuggestions,
} = require("../controllers/suggestionController");
const {
  isAuthenticated,
  authorizeRoles,
} = require("../middlewares/isAuthenticated");
const router = express.Router();

router.post(
  "/createSuggestion",
  isAuthenticated,
  authorizeRoles("user"),
  createSuggestion
);
router.get(
  "/getAllSuggestions",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllSuggestions
);

module.exports = router;
