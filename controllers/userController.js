const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

//route:1 creating user
//TODO : FIGURE OUT TOKENIZATION LATER
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    //hashing the password
    var hash = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
      address,
      role: req.body.role ? req.body.role : "user",
    });
    //generating the token

    const token = user.getJWTToken();
    req.token = token;
    return res.status(201).json({ success: true, user, token });
  } catch (error) {
    console.log("error is ", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

//route:2 login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //if email or pw not provided , quit
    if (!email || !password) {
      return res
        .status(500)
        .json({ success: false, message: "please enter email and password" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.json({
        success: false,
        message: "pls enter correct credentials",
      });
    }
    const passwordMatched = await user.comparePassword(password);
    //if password does not match then quit
    if (!passwordMatched) {
      return res.json({
        success: false,
        message: "pls enter correct credentials",
      });
    }

    const token = user.getJWTToken();
    req.body.token = token;
    return res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.log("error is ", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

//route : 3 logout

exports.logout = async (req, res) => {
  req.body.token = null;
  return res.status(200).json({ success: true, message: "logged out" });
};
