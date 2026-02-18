const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
     {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true
    },
    companyName: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["applied", "interview", "rejected", "offer"],
      default: "applied",
      index: true
    },
    appliedDate: {
      type: Date,
      default: Date.now
    },
    notes: String
  },
  { timestamps: true }
);

applicationSchema.index({ userId: 1, status: 1 });

module.exports = mongoose.model("Application", applicationSchema);
