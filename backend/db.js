const mongoose = require("mongoose");
mongoose.connect("URI");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});
//name of model is 'todos' and schema for that
//model is todoSchema
const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
