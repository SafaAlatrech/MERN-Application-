const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

//add new contact
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const response = await newContact.save();
    res.send({ res: response, message: "New Contact added" });
  } catch (error) {
    console.log(error);
    res.status(400).send("status 400");
  }
});
//display  contacts
router.get("/", async (req, res) => {
  try {
    const response = await Contact.find();

    res.send({ res: response, message: "Gentting Contacts Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Contacts");
  }
});
// find contact by id
router.get("/:id", async (req, res) => {
  try {
    const response = await Contact.findOne({ _id: req.params.id });

    res.send({ res: response, message: "Gentting Contact Successufly" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Get Contact");
  }
});
// Delete Contact
router.delete("/:id", async (req, res) => {
  try {
    const response = await Contact.deleteOne({ _id: req.params.id });
    response.deletedCount
      ? res.send({ message: "Contact Deleted Successufly" })
      : res.send({ message: "Contact Already DELETED" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Delete Contact");
  }
});

// Update Contact
router.put("/:id", async (req, res) => {
  try {
    const response = await Contact.updateOne({ _id: req.params.id },{$set:{...req.body}});
    response.nModified
      ? res.send({ message: "Contact Updated Successufly" })
      : res.send({ message: "Contact Already Update" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can not Update Contact");
  }
});
module.exports = router;
