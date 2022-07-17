const mongoose = require("mongoose");
const { Schema } = mongoose;

const SuggestionSchema = new Schema({
  //user that gave the suggestion
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: [true, "please provide some title"],
  },

  description: {
    type: String,
    required: [true, "please enter the description of the ad"],
  },
});

module.exports = mongoose.model("Suggestion", SuggestionSchema);
