const mongoose = require("mongoose");


const approvalHistorySchema = new mongoose.Schema(
  {
    // approval_id: String,
    article_id: String,
    approver_id: String,
    action: String,
    reason: String,
    action_time: Date
  },

  {
    timestamps: true,
  }
);
const approvalHistoryModel = mongoose.model(
  "approvalHistoryModel",
  approvalHistorySchema,
  "approval-history"
);

module.exports = approvalHistoryModel;
