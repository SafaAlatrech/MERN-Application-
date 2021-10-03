const mongoose = require("mongoose");
const shema = mongoose.Schema;
const contactSchema = new shema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
});

module.exports = Contact = mongoose.model("contact", contactSchema);
