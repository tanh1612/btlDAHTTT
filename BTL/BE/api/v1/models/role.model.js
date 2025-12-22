const mongoose = require("mongoose");


const roleSchema = new mongoose.Schema(
  {
    // role_id: String,
    role_name: String,
    description: String,
  },

  {
    timestamps: true,
  }
);
const roleModel = mongoose.model(
  "roleModel",
  roleSchema,
  "roles"
);

module.exports = roleModel;
