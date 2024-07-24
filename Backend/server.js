const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://Walker0710:ankush007alan@justfortest.ocqjlhg.mongodb.net/Blog_SriRam?retryWrites=true&w=majority&appName=JustForTest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  likes: { type: Number, default: 0 },
  comments: [{ type: String }],
});

const Blog = mongoose.model('Blog', BlogSchema, 'Blog');

// Routes
app.post('/blogs', async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.send(blog);
});

app.get('/blogs', async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
});

app.post('/blogs/:id/like', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog.likes += 1;
  await blog.save();
  res.send(blog);
});

app.post('/blogs/:id/comment', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog.comments.push(req.body.comment);
  await blog.save();
  res.send(blog);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
