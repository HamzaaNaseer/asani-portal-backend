const mongoose = require("mongoose");
const { Schema } = mongoose;

const adsSchema = new Schema({
  //admin that created the ad
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  description: {
    type: String,
    required: [true, "please enter the description of the ad"],
  },
  status: {
    type: String,
    required: [true, "please enter the status of the ad"],
  },
});


module.exports = mongoose.model("Ads", adsSchema);
