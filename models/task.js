const mongoose = require("mongoose");

//set up structure for all documnents
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});
