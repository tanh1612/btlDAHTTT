const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    // user_id: String,
    username: String,
    password: String,
    full_name: String,
    email: String,
    role_id: String,
    status: {
        type: String,
        default: "active"
    },
  },

  {
    timestamps: true,
  }
);
const userModel = mongoose.model(
  "userModel",
  userSchema,
  "users"
);

module.exports = userModel;
