const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

exports.authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ errorMessage: "No token provided. Authorization Denied" });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log("jwt error: ", err);
    return res.status(401).json({ errorMessage: "Invalid token" });
  }
};
