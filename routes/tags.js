const express = require("express");

const { Tag, validateTag } = require("../models/tag");
const _ = require("lodash");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.get("/", async (req, res) => {
  const tags = await Tag.find();
  res.send(tags);
});

router.post("/",protect, async (req, res) => {
  const { error } = validateTag(req.body);
  if (error) return res.status(400).send("enter a valid tag");
  const tag = new Tag({
    name: req.body.name,
  });
  try {
    await tag.save();
    console.log("tag created");
    res.send(_.pick(tag, ["_id","name", "used" ]));
  } catch (err) {
    console.log("err", err);
  }
});

module.exports = router;