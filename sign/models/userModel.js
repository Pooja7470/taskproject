const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userModel = new mongoose.Schema({
    username: String,
    password: String,
    contact: String,
    email: String,
 })

userModel.plugin(plm);

const model = mongoose.model("model", userModel);

module.exports = model;
