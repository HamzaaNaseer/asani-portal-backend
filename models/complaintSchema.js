const mongoose = require("mongoose");
const { Schema } = mongoose;

const complaintSchema = new Schema({
  //user that registered the complaint
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  registeredOn: {
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
  complaintType: {
    type: Schema.Types.ObectId,
    ref: "Complainttype",
    required: true,
  },
});


module.exports = mongoose.model("Complaint", complaintSchema);
