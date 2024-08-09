const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  words: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
  }],
});

module.exports = mongoose.model('Category', categorySchema);
