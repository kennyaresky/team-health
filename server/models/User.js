const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minLength: 3,
    maxLength: 25,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
      sparse: true,
    },
  },
  alive: Boolean,
});

module.exports = mongoose.model("User", UserSchema);

// try this...

// first: {
//     type: String,
//     required: [true, "Please provide a firtname"],
//     minLength: 3,
//     maxLength: 25,
//   },
//   last: {
//     type: String,
//     required: [true, "Please provide a lastname"],
//     minLength: 3,
//     maxLength: 25,
//   },
