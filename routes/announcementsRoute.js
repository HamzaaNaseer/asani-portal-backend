const express = require("express");
const { createAnnouncement } = require("../controllers/announcementController");
const {
  isAuthenticated,
  authorizeRoles,
} = require("../middlewares/isAuthenticated");
const router = express.Router();

//route : 1 create Announcements
//only admin can create an announcement
router.post(
  "/createannouncement",
  isAuthenticated,
  authorizeRoles("admin"),
  createAnnouncement
);

module.exports = router;
