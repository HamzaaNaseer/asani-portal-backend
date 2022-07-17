const Announcement = require("../models/announcementsSchema");

exports.createAnnouncement = async (req, res) => {
  try {
    const { title, description } = req.body;
    const announcement = await Announcement.create({ title, description });
    return res
      .status(201)
      .json({ success: true, message: "announcement created successfully" ,announcement});
  } catch (error) {
    console.log("error is ", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllAnnouncements = async (req, res) => {
  try {
    const annoucements = await Announcement.find();
    res.status(200).json({
      success: true,
      annoucements,
    });
  } catch (error) {
    console.log("error is ", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteAnnouncement = async (req, res) => {
  try {
    let announcementToDelete = await Announcement.findById(req.params.id);
    if (!announcementToDelete) {
      return res.status(500).json({
        success: false,
        message: "Announcement not found",
      });
    }
    //deleting announcement from the database

    await Announcement.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Annoucement deleted successfully",
    });
  } catch (error) {}
};
