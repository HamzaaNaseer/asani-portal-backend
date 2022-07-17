const Announcement = require("../models/announcementsSchema");

exports.createAnnouncement = async (req, res) => {
  try {
    const { title, description } = req.body;
    const announcement = await Announcement.create({ title, description });
    return res.status(201).json({ success: true, message:'announcement created successfully' });
  } catch (error) {
    console.log("error is ", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
