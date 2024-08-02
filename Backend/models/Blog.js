// const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   text: {
//     type: String,
//     required: true,
//   },
// });

// const blogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   comments: [commentSchema],
// });

// const Blog = mongoose.model('Blog', blogSchema, 'Blog');
// module.exports = Blog;

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  text: { type: String, required: true },
  // createdAt: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [commentSchema],
});

const Blog = mongoose.model('Blog', blogSchema, 'Blog');

module.exports = Blog;
