
const mongoose = require("mongoose");

const postSchema = new mongoose. Schema ({
    title: {
    type: String,
    required: [true, "Post title is required"],
    },
    description: {
    type: String,
    required: [true, "Post description is required"],
    },
    content: {
    type: String,
    retired: [true, 'Post Content is required'],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post',postSchema);
module.exports = Post;