const Post = require("../models/Post");
const slugify = require("slugify");

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author category");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author category");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create post
exports.createPost = async (req, res) => {
  const { title, content, author, category } = req.body;
  const image = req.file ? req.file.filename : null; // ✅ Get uploaded image filename

  try {
    const slug = slugify(title, { lower: true, strict: true }); // ✅ Create slug automatically
    const newPost = new Post({
      title,
      slug,
      content,
      author,
      category,
      image,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
