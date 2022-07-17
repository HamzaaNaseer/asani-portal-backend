const mongoose = require("mongoose");
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
  //user that registered the complaint
  title: {
    type: String,
    required: [true, "please enter the title"],
  },
});

module.exports = mongoose.model("Complainttype", ComplaintSchema);
