const express = require("express");
const {
  createAnnouncement,
  getAllAnnouncements,
  deleteAnnouncement,
} = require("../controllers/announcementController");
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
router.get("/getAllAnnouncements", isAuthenticated, getAllAnnouncements);
router.delete(
  "/deleteAnnouncement/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteAnnouncement
);
module.exports = router;
