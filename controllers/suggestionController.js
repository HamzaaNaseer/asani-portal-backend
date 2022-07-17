const Suggestion = require("../models/suggestionSchema");

exports.createSuggestion = async (req, res) => {
  try {
    const { title, description } = req.body;
    const suggestion = await Suggestion.create({
      title,
      description,
      user: req.user._id,
    });
    return res.status(200).json({
      success: true,
      suggestion,
    });
  } catch (error) {
    console.log("error is ", error.message);
    res.status(500).json({
      success: false,
      messaage: "some error occured",
    });
  }
};

exports.getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.status(200).json({
      success: true,
      suggestions,
    });
  } catch (error) {
    console.log("error is ", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
