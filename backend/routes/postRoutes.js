const express = require("express");
const router = express.Router();
const { createPost, getPosts, deletePost, likePost } = require("../controllers/postController");

router.post("/add", createPost);
router.get("/", getPosts);
router.delete("/:id", deletePost);
router.post("/:id/like", likePost);

module.exports = router;
