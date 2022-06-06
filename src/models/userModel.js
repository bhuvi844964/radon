const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Bookname:String,

  Authorname:String,

  Catagory:String,

}, { timestamps:true});

module.exports = mongoose.model("User", userSchema); 


