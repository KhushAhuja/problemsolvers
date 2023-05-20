const mongoose = require("mongoose");
const { User } = require("../models/userModel");
const Joi = require("joi");
const { tagSchema } = require("./tag");

// Define Post Schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  replies: [
    {
      content: String,
      author: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
// Define Post Model
// const Post = mongoose.model("Post", postSchema);

// // function validatePost(post) {
// //   const schema = Joi.object({
// //     title: Joi.string().required().min(10).max(80),
// //     description: Joi.string().required().min(3).max(1024),
// //     tags: Joi.array(),
// //   });
// //   return schema.validate(post);
// // }

// exports.Post = Post;
// // exports.validatePost = validatePost;
