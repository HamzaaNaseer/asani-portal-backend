const mongoose = require("mongoose");
const { Schema } = mongoose;

const passesSchema = new Schema({
  //user that generated the pass
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  generatedOn: {
    type: Date,
    default: Date.now,
  },
  details: {
    type: String,
    required: [true, "please give some description of the guest"],
  },
});

module.exports = mongoose.model("Passes", passesSchema);
