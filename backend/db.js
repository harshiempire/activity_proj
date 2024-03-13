const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://realadmin:realadmin@cluster0.p3phjsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// Define schema for activity
const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["In Progress", "Pending", "Completed", "Cancelled"],
    default: "Pending",
  },
});

// Create model based on schema
const Activity = mongoose.model("Activity", activitySchema);

// Export model
module.exports = Activity;
