const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Get all posts
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Create a new post
router.post("/", (req, res) => {
  const newPost = new Post(req.body);

  newPost
    .save()
    .then(() => res.json(newPost))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Create a new reply to a post
router.post("/:id/replies", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.replies.push(req.body);

      post
        .save()
        .then(() => res.json(post))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
