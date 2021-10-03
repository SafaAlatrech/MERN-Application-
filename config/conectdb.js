const mongoose = require("mongoose");
const conectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/contactsdb",{useUnifiedTopology: true ,useNewUrlParser: true});
    console.log("DATABASE Connect Succesfuly");
  } catch (error) {
    console.log("Can not connect to DATABASE");
  }
};
module.exports = conectdb;
