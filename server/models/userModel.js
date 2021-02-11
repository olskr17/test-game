const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: {type: String},
  email: {
    type: String, required: true
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  documentCode: { type: String}
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
