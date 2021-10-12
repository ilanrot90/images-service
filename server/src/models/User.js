const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtKey, jwtExpire } = require("../config/jwt");
const { isEmail } = require("validator");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: [true, "Please add email"],
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      minLength: [6, "password is too short"],
      required: [true, "Please add password"],
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Encrypt password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// compare password
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
// Sign JWT
UserSchema.methods.signJwtToken = function () {
  return jwt.sign(
    {
      email: this.email,
      id: this._id,
    },
    jwtKey,
    { expiresIn: jwtExpire }
  );
};
module.exports = mongoose.model("User", UserSchema);
