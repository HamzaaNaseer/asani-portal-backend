const mongoose = require("mongoose");
const { Schema } = mongoose;

const announcementsSchema = new Schema({

  title: {
    type: String,
  },

  description: {
    type: String,
    required: [true, "please enter the description of the ad"],
  },
  
});


module.exports = mongoose.model("Announcement", announcementsSchema);
