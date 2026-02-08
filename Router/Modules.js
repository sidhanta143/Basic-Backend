
const {
  Schema,
  model
} = require("mongoose");

const MySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = model("test", MySchema)

module.exports = TaskModel