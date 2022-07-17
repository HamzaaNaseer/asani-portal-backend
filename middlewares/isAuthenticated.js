const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
//this middleware checks that if the user that is
//trying to access the resource is loggedin or not
exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) {
      console.log("error is : ", error.message);

      return res.json({
        success: false,
        message: "login to access this resource",
      });
    }

    //extracting user from token
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findById(data.id);
    next();
  } catch (error) {
    console.log("error is : ", error.message);
    return res.json({
      success: false,
      message: "login to access this resource",
    });
  }
};

//middleware that checks that if a person requesting is authorized to access
exports.authorizeRoles = (...roles) => {
  //returning a function because i want to pass roles
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "not allowed to access this resource" });
    }
    console.log("testing");
    next();
  };
};
