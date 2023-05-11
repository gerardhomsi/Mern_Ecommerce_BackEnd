const { check, validationResult } = require("express-validator");

exports.signupValidator = [
  check("username").not().isEmpty().trim().withMessage("Username is required"),
  check("email").isEmail().normalizeEmail().withMessage("Email is invalid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const firstError = result.array()[0].msg;
    return res.status(400).json({ errorMessage: firstError });
    // console.log("has errors", hasErrors);
    // console.log("EL-result", result);
  }
  next();
};
