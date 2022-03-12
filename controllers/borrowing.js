let express = require("express");
const mongoose = require("mongoose");
const borrowing = require("../models/borrowings");
let router = express.Router();
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let auth = require("../middlewares/auth");
let user = require("../models/users");

router.post("/", async (req, res) => {
  try {
    let loanApplication = await borrowing.create({ ...req.body });
    res.status(200).json(loanApplication);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  console.log(req.body);
  try {
    let applications = await borrowing
      .find({ userId: req.body.user_id })
      .sort("desc");
    console.log(applications);
    if (applications.length < 1) {
      return res
        .status(404)
        .json({ message: "cant find application for user" });
    }
    res.send(applications);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "cant find applications for user" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let application = await borrowing.updateOne(
      {
        _id: req.params.id,
      },
      { ...req.body, updatedAt: new Date() }
    );

    res.status(200).json({message:"Loan Application updated successfully"});
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
});

module.exports = router;
